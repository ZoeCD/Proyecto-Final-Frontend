import React, { useState, useEffect } from 'react';
import AddDestination from './components/AddDestination';
import Button from './components/Button'

function DestForm({ username, updateDestinations}) {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <Button
                color={visible ? '#C9ADA7' : '#4A4E69'}
                text={visible ? 'Close' : 'Add'}
                onClick={() => setVisible(visible === false)}
            />
            {visible && <AddDestination username={username} updateDestinations={updateDestinations} />}
        </div>
    )
}

function Destination({ data, updateDestinations }) {
    const [done, setDone] = useState(data.done);

    const completeDest = () => {
        fetch(`/api/destination/${data._id}`, {
            method: "PUT",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ done: !done, username: data.owner })
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

    const deleteCard = () => {
        fetch(`/api/destination/${data._id}`, {
            method: "DELETE",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: data.owner })
        })
            .then(res => res.json())
            .then(res => {
                if (res.status === 200) {
                    updateDestinations()
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
            <div className="grid">
                <Button
                    color='#ff0000'
                    text='Delete'
                    onClick={(e) => deleteCard(e)}
                />
                <Button
                    color={done ? '#C9ADA7' : '#4A4E69'}
                    text={done ? 'Undo' : 'Complete'}
                    onClick={(e) => completeDest(e)}
                />
            </div>
        </div>
    )
}

function DestinationsComp({ destinations,  updateDestinations}) {
    let destinationCards;
    if (destinations && destinations.length) {
        destinationCards = destinations.map((destination) => {
            return (
                <Destination data={destination} updateDestinations={updateDestinations} />
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

export default function Destinations({ username }) {
    const [destinations, setDestinations] = useState([])

    const updateDestinations = () => {
        fetch(`/api/destination?username=${username}`, {
            method: "GET",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(dest => {
                setDestinations(dest.items);
            })
        return () => { };
    }

    useEffect(updateDestinations, [username]);

    return (
        <div className='App'>
            <DestForm username={username} updateDestinations={updateDestinations}/>
            <DestinationsComp destinations={destinations} updateDestinations={updateDestinations} />
        </div>
    )
}