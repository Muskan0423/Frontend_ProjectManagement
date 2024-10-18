import React, { useState } from 'react';
import './SupportModal.css';

const SupportModal = ({ onClose }) => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Get the token from local storage
        const token = localStorage.getItem('token');

        if (!token) {
            alert('No token found. Please log in.');
            return;
        }

        // Make API call to send the support ticket
        const response = await fetch('http://localhost:5000/api/users/tickets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Include token for authentication
            },
            body: JSON.stringify({ subject, message }), // Send subject and message
        });

        if (response.ok) {
            alert('Ticket submitted successfully!');
            onClose();
        } else {
            alert('Failed to submit ticket.');
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Support</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Subject"
                        required
                    />
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter your message..."
                        required
                    />
                    <div className='buttonMiddleWrapper'>
                        <button type="submit">Send</button>
                    </div>
                </form>
                <div className='buttonMiddleWrapper'>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default SupportModal;
