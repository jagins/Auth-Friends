import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/AxiosWithAuth'
import Friend from './Friend';

function FriendsList()
{
    const [friendsList, setFriendsList] = useState([]);
    useEffect(() =>
    {
        axiosWithAuth().get('/friends')
        .then(response => setFriendsList(response.data))
        .catch(error => console.log(error))
    }, [])
    return (
        <div className='friends-list'>
            <h1>Friends List</h1>
            {friendsList.map(friend =>{
                return <Friend key={friend.id} name={friend.name} age={friend.age} email={friend.email}/>
            })}
        </div>
    );
}

export default FriendsList;