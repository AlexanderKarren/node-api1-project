import React from 'react'
import User from './User'
import './UserList.css'

const UserList = ({ users, updateUsers }) => {
    return (
        <div className="user-list">
            {users.map(user => <User key={user.id} user={user} users={users} updateUsers={updateUsers}/>)}
        </div>
    )
}

export default UserList
