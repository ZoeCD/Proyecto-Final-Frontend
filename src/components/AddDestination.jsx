import React, { useState } from 'react';

const AddDestination = ({username}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!name || !description) {
            alert('You need to write the name and description')
            return
        }
        const dest = { owner: username, name: name, description: description, type: type, done: false }
        fetch('/api/destination', {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dest)
        }).then(res => {
            if (res.status !== 200) {
                console.error(res);
                return;
            }

            setName('')
            setDescription('')
            setType('')
        }, err => {
            console.error(err);
        })


    }


    return (

        <form className='destination-form' onSubmit={onSubmit}>
            <div className='form-component'>
                <label>Name</label>
                <input type='text' placeholder='Add new goal' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='form-component'>
                <label>Description</label>
                <textarea placeholder='What is it about?' value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className='form-component'>
                <label>Type</label>
                <div className="form-component-select">
                    <div>
                        <input type="radio" name="type" id="city" value="City" onChange={(e) => setType(e.target.value)} />
                        <label htmlFor="city">City</label>
                    </div>
                    <div>
                        <input type="radio" name="type" id="monument" value="Monument" onChange={(e) => setType(e.target.value)} />
                        <label htmlFor="monument">Monument</label>
                    </div>
                    <div>
                        <input type="radio" name="type" id="activity" value="Activity" onChange={(e) => setType(e.target.value)} />
                        <label htmlFor="activity">Activity</label>
                    </div>
                </div>
            </div>

            <input type='submit' value='Save Goal' className='btn btn-block' />

        </form>



    )

}

export default AddDestination