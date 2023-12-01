import React from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';
import AddStatRow from './StatRow.js';

function StatsTable({ discStats, onEditStat, onDeleteStat }) {
    return (
        <table>
            <caption>Add, Edit, and Delete Disc Golf Stats</caption>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Course</th>
                    <th>Par Score</th>
                    <th>User's Score</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th><a href='../create'> <AiOutlineFileAdd /> </a></th>
                </tr>
            </thead>
            <tbody>
                {discStats.map((discStat, i) => 
                    <AddStatRow
                        discStat={discStat} 
                        key={i}
                        onEditStat={onEditStat} 
                        onDeleteStat={onDeleteStat}
                    />)}
            </tbody>
        </table>
    );
}

export default StatsTable;
