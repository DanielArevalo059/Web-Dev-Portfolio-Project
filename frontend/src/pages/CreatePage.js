import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const CreatePage = () => {

    const [date,        setDate]      = useState('');
    const [course,      setCourse]    = useState('');
    const [parScore,    setParScore]  = useState('');
    const [userScore,   setUserScore] = useState('');
    
    const redirect = useNavigate();

    const addStat = async () => {
        const newStat = { date, course, parScore, userScore };
        const response = await fetch('/log', {
            method: 'POST',
            body: JSON.stringify(newStat),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`New disc golf statistic has been logged!`);
            redirect("/log");
        } else {
            alert(`Unable to add the statistic. Status Code: ${response.status}`);
            redirect("/log");
        }
    };


    return (
        <>
            <h2>Log a new disc golf statistic</h2>
            <article>
            <p>Add a new statistic.</p>
            <table>
                <caption>Add a new statistic.</caption>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Course</th>
                    <th>Par Score</th>
                    <th>User's Score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><label for='date' class='required'>
                        <input 
                            type='date' 
                            value={date}
                            id='date' 
                            name='date'
                            onChange={e => setDate(e.target.value)} 
                            pattern='\d{2}-\d{2}-\d{2}'
                            required 
                            autofocus 
                        />
                        </label>
                    </td>

                    <td><label for='course' class='required'>
                        <input 
                            type='string'
                            value={course}
                            id='course'
                            name='course'
                            onChange={e => setCourse(e.target.value)} required
                        />
                    </label>
                    </td>

                    <td><label for='parScore' class='required'>
                        <input 
                            type='number'
                            value={parScore}
                            id='parScore'
                            name='parScore'
                            onChange={e => setParScore(e.target.value)} required
                        />
                    </label>
                    </td>

                    <td><label for='score' class='required'>
                        <input 
                            type='number'
                            value={userScore}
                            id='userScore'
                            name='userScore'
                            onChange={e => setUserScore(e.target.value)} required
                        />
                    </label>
                    </td>
                </tr>
            </tbody>
            </table>
            <p><button onClick={addStat}>Save</button></p>
            </article>
        </>
    );
}

export default CreatePage;