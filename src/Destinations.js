import React, { useState, useEffect } from 'react';
import Button from './components/Button'
import { IoMdClose } from "react-icons/io"
import { FiEdit } from "react-icons/fi"

function Destination({data}, username) {
    const [done, setDone] = useState(data.done);
    const completeDest = (e) => {
        fetch(`/api/destination/${data._id}`, {
            method: "PUT",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({done: !done, username: data.owner})
        })
        .then(res => res.json())
            .then(res => {
                if (res.status === 200) {
                    setDone(done === false);
                } else {
                    console.log(res);
                    alert('Something went wrong, please try again');
                }
            })
    }

    return (
        <div className='destination-card' key={data._id}>
            <h3>{data.name}</h3>
            <p> {data.type} </p>
            <p>{data.description}</p>
            <Button
                color={done ? '#C9ADA7' : '#4A4E69'}
                text={done ? 'Undo' : 'Complete'}
                onClick={(e) => completeDest(e)}
            />
        </div>
    )
}

export default function Destinations({ username }) {
    const [destinations, setDestinations] = useState([])
    let destinationCards;

    useEffect(() => {
        fetch(`/api/destination?username=${username}`, {
            method: "GET",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(dest => {
                dest.username = username;
                setDestinations(dest);
            })
        return () => { };
    }, [username]);

    if (destinations && destinations.items && destinations.items.length) {
        destinationCards = destinations.items.map((destination) => {
            return (
                <Destination data={destination} username={destinations.username}/>
            )
        })
    } else {
        destinationCards = [<p>No destinations, add one</p>]
    }
    return (
        <div className="grid">
            {destinationCards}
        </div>
    )
}