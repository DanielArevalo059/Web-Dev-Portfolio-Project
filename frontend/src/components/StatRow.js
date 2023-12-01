import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

function AddStatRow({ discStat, onEditStat, onDeleteStat }) {
    return (
        <tr>
            <td>{discStat.date.slice(0,10)}</td>
            <td>{discStat.course}</td>
            <td>{discStat.parScore}</td>
            <td>{discStat.userScore}</td>
            <td><AiOutlineEdit onClick={() => onEditStat(discStat)} /></td>
            <td><AiOutlineDelete onClick={() => onDeleteStat(discStat._id)} /></td>
        </tr>
    );
}

export default AddStatRow;