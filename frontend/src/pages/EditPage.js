import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const EditPage = ({ discStattoEdit }) => {

    const [date,        setDate]      = useState(discStattoEdit.date);
    const [course,      setCourse]    = useState(discStattoEdit.course);
    const [parScore,    setParScore]  = useState(discStattoEdit.parScore);
    const [userScore,   setUserScore] = useState(discStattoEdit.userScore);
    
    const redirect = useNavigate();

    const onEditStat = async () => {

            const response = await fetch(`/log/${discStattoEdit}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                date:       date, 
                course:     course, 
                parScore:   parScore,
                userScore:  userScore
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            alert(`Disc golf statistic has been updated!`);
            redirect("/log");
        } else {
            alert(`Unable to edit the statistic. Status Code: ${response.status}`);
            redirect("/log");
        }
    };


    return (
        <>
            <h2>Edit an existing disc golf statistic</h2>
            <article>
            <p>Enter the new data below.</p>
            <table id='editDiscStat'>
                <caption>Edit an existing statistic.</caption>
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
                    <td><label for='date' >
                        <input 
                            type='date' 
                            value={date}
                            id='date' 
                            name='date'
                            onChange={e => setDate(e.target.value)} 
                            pattern='\d{2}-\d{2}-\d{2}'
                            autofocus 
                        />
                        </label>
                    </td>

                    <td><label for='course' >
                        <input 
                            type='string'
                            value={course}
                            id='course'
                            name='course'
                            onChange={e => setCourse(e.target.value)} 
                        />
                    </label>
                    </td>

                    <td><label for='parScore' >
                        <input 
                            type='number'
                            value={parScore}
                            id='parScore'
                            name='parScore'
                            onChange={e => setParScore(e.target.value)} 
                        />
                    </label>
                    </td>

                    <td><label for='score' >
                        <input 
                            type='number'
                            value={userScore}
                            id='userScore'
                            name='userScore'
                            onChange={e => setUserScore(e.target.value)} 
                        />
                    </label>
                    </td>
                </tr>
            </tbody>
            </table>
            <p><button onClick={onEditStat}>Save</button></p>
            </article>
        </>
    );
}

export default EditPage;