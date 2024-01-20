import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function Admin() {
    const [messages, setMessages] = useState([]);
    const user = localStorage.getItem('user') === 'true' ? 'admin' : 'ghost';

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await fetch("http://localhost:3000/messages");
            const data = await response.json();
            setMessages(data);
        } catch (error) {
            console.log(error);
        }
    };

    const postMessage = async (message) => {
        try {
            const response = await fetch("http://localhost:3000/messages", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message, user })
            });
            const data = await response.json();
            console.log(data);
            fetchMessages();
        } catch (error) {
            console.log(error);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const message = e.target.message.value;
        postMessage(message);
        e.target.reset();
    };

    return (
        <div className='flex flex-col items-center'>
            <Navbar />
            <div className='flex flex-col overflow-scroll h-[80vh] w-1/3 max-[640px]:w-full' id='messagArea'>
                {messages.map((el) => (
                    <div key={el.id} className={`flex flex-col mt-1 ${el.user === 'admin' ? 'items-end' : 'items-start'}`}>
                        <p className={`items-end rounded-xl px-3 py-1 text-white ${el.user === 'admin' ? 'bg-green-500' : 'bg-blue-400'}`}>{el.message}</p>
                    </div>
                ))}
            </div>
            <div className='absolute bottom-0 w-full bg-green-700 p-5 flex justify-center items-center h-[5vh]:'>
                <form onSubmit={handleFormSubmit} className='absolute bottom-0 w-full bg-green-700 p-5 flex justify-center items-center h-[5vh]:'>
                    <input type="text" id='message' className='w-1/3 max-[640px]:w-full bg-transparent outline-none text-gray-200' placeholder='Nimadir yozing . . .' />
                    <button type='submit' className='text-gray-200 rounded-md bg-green-900 px-3 py-1'>send</button>
                </form>
            </div>
        </div>
    );
}