import React, {useState,useEffect} from 'react';
import {IoMdClose, IoMdReturnLeft} from "react-icons/io"
import {FiEdit} from "react-icons/fi"
import AddDestination from './AddDestination';


const DestinationCard = ({destination, deleteDestination, editDestination}) => {

    return (
        <div className = 'destination-card'>
            <div className='delete-icon'>
                <IoMdClose onClick={() => deleteDestination(destination.id)}/>
            </div>
            
            <h3>{destination.name}</h3>
            <p> {destination.type} </p>
            <p>{destination.description}</p>
            <p> {destination.price}</p>
            <div className = 'form-component form-component-check'> 
                <label>Done</label>
                <input type = 'checkbox' />
            </div>
            <div className='edit-icon'>
                <FiEdit/>
            </div>
        </div>
    )
}
export default DestinationCard

