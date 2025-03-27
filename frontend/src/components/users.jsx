import React, { useState } from 'react'
import '../App.css'
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
function Users() {
   
    const [users,setUsers] = useState([])
    const navigate = useNavigate()
    
    
    useEffect(() => {
        fetch('http://localhost:5000/api/users/read')
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.log(`Error while fetching data : ${err}`))
    },[])

    const handleUpdate = () => {
        navigate('/update')
    }
    
    const handleDelete = (email) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        
        if (confirmDelete) {
            fetch(`http://localhost:5000/api/users/delete`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            })
            .then(() => {
                console.log("User deleted");
                setUsers(users.filter(user => user.email !== email));
            })
            .catch((err) => console.log("Error:", err));
        }
    };
    


    return(
        <div className='user'>
            {users.length > 0 ? (
                users.map((user) => (
                    <div className='user-card' key={user._id}>
                        <h3>{user.name}</h3>
                        <p>Email: {user.email}</p><br></br>
                        <button className='update' onClick={handleUpdate}>update</button>&nbsp;
                        <button className='delete' onClick={() => handleDelete(user.email)}>delete</button>
                    </div>
                ))
            ) : (
                <p>Loading users...</p>
            )}
        </div>
    )
}

export default Users;