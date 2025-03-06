import React, { useState } from 'react';

function Update() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated Data:', formData);
        fetch('http://localhost:5000/api/users/update',{
            method : 'PUT',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(formData)
        }
        ).then(() => console.log('updated'))

    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="form">
                <h2>Update User</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="update-btn">Update</button>
                </form>
            </div>
        </div>
    );
}

export default Update;
