import React from 'react'

function AddStaffRow ({staffMember}){
    //Display a new row of random staff member

    return(
    <tr>

        <td><img src={staffMember.picture.thumbnail} alt='Thumbnail photo for randomly generated staff member.' /></td>
        <td>
            <a href='mailto:{staffMember.email}'>
            {staffMember.name.first} {staffMember.name.last}</a>
        </td>
        <td>{staffMember.phone}</td>
        <td>{staffMember.location.city}</td>
    </tr>
    );
}

export default AddStaffRow;

