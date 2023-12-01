import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StatsTable from '../components/StatsTable';
import EditPage from './EditPage';

function DiscLogPage({ setStat }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [discStats, setStats] = useState([]);

    // RETRIEVE the entire list of disc statistics
    const loadStats = async () => {
        const response = await fetch('/log');
        const discStats = await response.json();
        setStats(discStats);
    }
    // UPDATE a single disc statistic
    const onEditStat = async discStattoEdit => {
        setStats(discStattoEdit);
        redirect("/update");
    }

    // DELETE a single disc statistic  
    const onDeleteStat = async _id => {
        const response = await fetch(`/log/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/log');
            const discStats = await getResponse.json();
            setStats(discStats);
        } else {
            console.error(`Failed to delete the disc statistic with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the disc stats
    useEffect(() => {
        loadStats();
    }, []);

    // DISPLAY the disc stats
    return (
        <>
            <h2>Disc Golf Statistics</h2>
            <p>This page displays the data for disc golf statistics entered in the database. Staistics included are the date, the course,
                the par total for the round, and the score received by the player.
            </p>
            <StatsTable 
                discStats={discStats} 
                onEditStat={onEditStat} 
                onDeleteStat={onDeleteStat} 
            />
        </>
    );
}

export default DiscLogPage;