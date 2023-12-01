import React, { useState } from 'react';
import AddStaffRow from "../components/StaffRow.js"  

function StaffPage(){

    const [staffMember, setMember] = useState([]);
    const getMember = () =>{
        //fetch 10 rows of random staff members
        fetch("https://randomuser.me/api/?results=10")
            .then((staffMember) => staffMember.json())
            .then((staffMember) => {
                setMember(staffMember.results);
            })
            .catch(() => {
                alert("Oops.. the server for creating a random user seems to be down. Please try again later.")
            });

    };

    return(
        <>
    <h2>Staff</h2>
    <article>
        <p>This page creates a table of random staff members.</p>

        <p>
        <button onClick={getMember} value="add 10 random users"> Click here</button> to create 10 random users from the <a href='https://randomuser.me/' >random user generator</a>
        &nbsp; and add them to a table below.
    </p>
        <table>
            <caption>Randomly Created Staff Members</caption>
            <thead>
              <tr>
                <th>Portrait</th>
                <th>Name/Email</th>
                <th>Phone</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
                {staffMember.map((staffMember, i) => <AddStaffRow staffMember={staffMember} key={i} />)}
            </tbody>
        </table>
    </article>
    </>
);
}
export default StaffPage;