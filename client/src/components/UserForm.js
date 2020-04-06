import React, { useState } from 'react'
import axios from 'axios'
import './UserForm.css'

const UserForm = ({ users, updateUsers }) => {
    const [values, setValues] = useState({
        name: "",
        bio: ""
    })

    const handleChanges = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        axios.post("http://localhost:5000/api/users/", values).then(response => {
            console.log(response.data);
            updateUsers([
                ...users,
                response.data
            ])
            setValues({
                name: "",
                bio: ""
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="user-form">
            <h1>Register User</h1>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={values.name} onChange={handleChanges}/>
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <input type="text" name="bio" id="bio" value={values.bio} onChange={handleChanges}/>
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default UserForm
