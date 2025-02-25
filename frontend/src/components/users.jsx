import React, { useState } from 'react'
import '../App.css'
import {useEffect} from 'react'
function Users() {
   
    const [users,setUsers] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/api/users/read')
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.log(`Error while fetching data : ${err}`))
    },[])


    return(
        <div className='user'>
            {users.length > 0 ? (
                users.map((user) => (
                    <div className='user-card' key={user._id}>
                        <h3>{user.name}</h3>
                        <p>Email: {user.email}</p>
                    </div>
                ))
            ) : (
                <p>Loading users...</p>
            )}
        </div>
    )
}

export default Users;