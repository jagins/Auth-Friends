import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/AxiosWithAuth'
import Friend from './Friend';


function FriendsList() {
    const [friendsList, setFriendsList] = useState([]);
    const [friendInfo, setFriendInfo] = useState({ name: '', age: '', email: '' });

    useEffect(() => {
        axiosWithAuth().get('/friends')
            .then(response => setFriendsList(response.data))
            .catch(error => console.log(error))
    }, [])

    const handleChange = e =>
    {
        setFriendInfo({
            ...friendInfo,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e =>
    {
        e.preventDefault();
        axiosWithAuth().post('/friends', friendInfo)
        .then(response =>
        {
            setFriendsList(response.data);
            setFriendInfo({name: '', age: '', email: ''});
        })
        .catch()
    }
    return (
        <div className='friends-list'>
            <h1>Friends List</h1>
            <div className='friends-container'>
                {friendsList.map(friend => {
                    return <Friend key={friend.id} name={friend.name} age={friend.age} email={friend.email} />
                })}

            </div>
            <div className='friend-form'>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='name'
                        value={friendInfo.name}
                        onChange={handleChange}
                        placeholder='name' />

                    <input
                        type='text'
                        name='age'
                        value={friendInfo.age}
                        onChange={handleChange}
                        placeholder='age' />

                    <input
                        type='email'
                        name='email'
                        value={friendInfo.email}
                        onChange={handleChange}
                        placeholder='email' />

                    <button>Add Friend</button>
                </form>
            </div>
        </div>
    );
}

export default FriendsList;