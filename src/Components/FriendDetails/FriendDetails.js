import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friedId} = useParams();
    
    const [friend, setFriend] =useState({});

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friedId}`
        console.log(url);
        fetch(url)
        .then(res =>res.json())
        .then(data => setFriend(data))
    },[])

    return (
        <div>
            <h1>this is bondhu serial:: {friedId}</h1>
            <h3>Name :{friend.name}</h3>
            <h4>Email : {friend.email}</h4>
            <h6>website : {friend.website}</h6>
            <p><small>city : {friend.address?.city}</small></p>
        </div>
    );
};

export default FriendDetails;