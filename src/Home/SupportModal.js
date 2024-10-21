import React, { useState, useEffect } from 'react';
import './SupportModal.css';

const SupportModal = ({ onClose }) => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetchUserTickets();
    }, []);

    const fetchUserTickets = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('No token found. Please log in.');
            return;
        }

        const response = await fetch('http://localhost:5000/api/users/tickets/user/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const fetchedTickets = await response.json();
            setTickets(fetchedTickets);
        } else {
            alert('Failed to fetch tickets.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (!token) {
            alert('No token found. Please log in.');
            return;
        }

        const response = await fetch('http://localhost:5000/api/users/tickets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ subject, message }),
        });

        if (response.ok) {
            alert('Ticket submitted successfully!');
            setSubject('');
            setMessage('');
            fetchUserTickets(); 
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

                <h3>Your Tickets</h3>
                <div className="ticket-list">
                    {tickets.length === 0 ? (
                        <p>No tickets submitted yet.</p>
                    ) : (
                        tickets.map((ticket) => (
                            <div key={ticket._id} className="ticket">
                                <h4>Subject: <span>{ticket.subject}</span></h4>
                                <h5>Message: <span>{ticket.message}</span></h5>
                                <h5>Status: {ticket.status || 'Pending'}</h5>
                                {ticket.responseMessage && (
                                    <div>
                                        <strong>Response:</strong>
                                        <span>{ticket.responseMessage}</span>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>

                <div className='buttonMiddleWrapper'>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default SupportModal;
