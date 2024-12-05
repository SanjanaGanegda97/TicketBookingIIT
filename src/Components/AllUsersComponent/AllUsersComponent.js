import React, { useEffect, useState } from 'react';
import { getAllUsers, updateUserType } from '../../api/userApi';
import './AllUsersComponent.scss'; // Import your styles

const AllUsersComponent = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [userType, setuserType] = useState();

    useEffect(() => {
        getAllUsers()
            .then((res) => {
                //console.log(res.data);
                setAllUsers(res.data.users); // Update state with the user data
            })
            .catch((err) => {
                console.log("errors", err);
            });
    }, []);

    const handleSubmit = async (userId, userType) => {
        //console.log(userId)
        //console.log(userType)

        await updateUserType({userId, userType})
        .then (() => {
            console.log("User Updated")
        })
        .catch((err) => {
            console.log (err);
        })
    }

    return (
        <div className="all-users-container">
            <h2>All Users</h2>
            <div className="users-list">
                {allUsers.map((user) => (
                    <div className="user-card" key={user._id}>
                        <div className="user-info">
                            <div className="user-item">
                                <label className="user-label">Name: </label>
                                <span className="user-value">{user.name}</span>
                            </div>
                            <div className="user-item">
                                <label className="user-label">Email: </label>
                                <span className="user-value">{user.email}</span>
                            </div>
                            <div className="user-item">
                                <label className="user-label">User Type: </label>
                                <select
                                    className="user-dropdown"
                                    defaultValue={user.userType} // Set default value from user data
                                    onChange={(e) => {setuserType(e.target.value)}}
                                >
                                    <option value="Vendor">Vendor</option>
                                    <option value="Super Admin">Super Admin</option>
                                    <option value="Basic User">Basic User</option>
                                </select>
                            </div>
                            <div className="user-item">
                                <label className="user-label">Email: </label>
                                <span className="user-value">{userType}</span>
                            </div>
                        </div>
                        <button className="change-user-type-btn" onClick= {() =>{ 
                            handleSubmit(user._id, userType); 
                        }}>
                            Change User Type
                        </button>
                    </div>
                    
                ))}
            </div>
        </div>
    );
};

export default AllUsersComponent;
