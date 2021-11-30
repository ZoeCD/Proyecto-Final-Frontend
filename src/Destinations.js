import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io"
import { FiEdit } from "react-icons/fi"

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
                setDestinations(dest.items);
            })
        return () => { };
    }, [username]);

    if (destinations && destinations.length) {
        destinationCards = destinations.map((destination, ind) => {
            return (
                <div className='destination-card' key={ind}>
                    <h3>{destination.name}</h3>
                    <p> {destination.type} </p>
                    <p>{destination.description}</p>
                </div>
            )
        })
    } else {
        destinationCards = [<p>No destinations, add one :)</p>]
    }

    return (
        <div className="grid">
            {destinationCards}
        </div>
    )
}