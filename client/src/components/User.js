import React from 'react'
import axios from 'axios'
import './User.css'

const User = ({ user, updateUsers, users }) => {
    const deleteItem = () => {
        axios.delete(`http://localhost:5000/api/users/${user.id}`).then(response => {
            console.log(response);
            updateUsers(users.filter(element => (element.id !== response.data.id)))
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="user">
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            <button onClick={deleteItem}>Delete</button>
        </div>
    )
}

export default User
