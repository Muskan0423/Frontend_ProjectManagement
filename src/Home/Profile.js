import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Profile.css";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token'); 
            if (!token) {
                console.error('No token found');
                setLoading(false);
                return;
            }

            const response = await fetch('http://localhost:5001/api/users/users/me', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const text = await response.text(); 
            console.log('Response:', text); 

            if (response.ok) {
                try {
                    const data = JSON.parse(text); 
                    setUser(data);
                    console.log(data);
                } catch (parseError) {
                    console.error('Error parsing JSON:', parseError);
                }
            } else {
                console.error('Failed to fetch user data:', text);
            }
            setLoading(false);
        };

        fetchUserData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (!user) return <div>User not found</div>;
const handleback=()=>{
navigate("/")
}
    const totalTasks = user.tasks.length;
    const pendingTasks = user.tasks.filter(task => task.status === 'pending').length;

    return (
        <div className="card-container">
            <main className="card">
                <button onClick={() => handleback()} className="back-button">
                    Back
                </button>
                <div className="user-content">
                    <div className="user-details">
                        <h1 className="user-name-age">
                            {user.username} 
                        </h1>
                        <div className="user-location">{user.email}</div>
                    </div>
                    <hr />
                    <div className="user-stats">
                        <div className="tasks">
                            <h1 className="stats">{totalTasks}</h1>
                            <div className="title">Total Tasks</div>
                        </div>
                        <div className="pending-tasks">
                            <h1 className="stats">{pendingTasks}</h1>
                            <div className="title">Pending Tasks</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Profile;
