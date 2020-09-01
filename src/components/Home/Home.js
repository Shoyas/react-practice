import React, { useState, useEffect } from 'react';
import Friend from '../Friend/Friend';


const Home = () => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])

    return (
        <div>
            <h1>Friend = {friends.length}</h1>
            <ol>
                {
                    friends.map( friend => 
                        <Friend
                        friend={friend}
                        key={friend.id}>
                        </Friend>
                    )
                }
            </ol>
        </div>
    );
};

export default Home;