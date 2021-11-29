import React from "react"
const DestinationCard = ({destination}) => {
    return (
        <div className = 'destination-card'>
            <h3>{destination.name}</h3>
            <p> {destination.type} </p>
            <p>{destination.description}</p>
            <p> {destination.price}</p>
            <div className = 'form-component form-component-check'> 
                <label>Done</label>
                <input type = 'checkbox'/>
            </div>
        </div>
    )
}
export default DestinationCard