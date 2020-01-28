import React from 'react';

function Friend(props)
{
    const {name, age, email} = props;
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export default Friend;