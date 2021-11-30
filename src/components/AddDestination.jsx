import React, {useState,useEffect} from 'react';

const AddDestination = ({onAdd}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [done, setDone] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name || !description){
            alert('You need to write the name and description')
            return
        }

        onAdd({name, description, type, done})

        setName('')
        setDescription('')
        setType('')
    }


    return (

        <form className='destination-form' onSubmit={onSubmit}>
            <div className='form-component'>
                <label>Name</label>
                <input type='text' placeholder='Add new goal' value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className='form-component'>
                <label>Description</label>
                <textarea placeholder='What is it about?' value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className='form-component'>
                <label>Type</label>
                <div className="form-component-select">
                    <div>
                        <input type="radio" name="city" id="city" value="city" onChange={(e)=>setType(e.target.value)}/>
                        <label htmlFor="city">City</label>
                    </div>
                    <div>
                        <input type="radio" name="monument" id="monument" value="monument" onChange={(e)=>setType(e.target.value)}/>
                        <label htmlFor="monument">Monument</label>
                    </div>
                    <div>
                        <input type="radio" name="activity" id="activity" value="activity" onChange={(e)=>setType(e.target.value)}/>
                        <label htmlFor="activity">Activity</label>
                    </div>
                </div>
            </div>

            <input type='submit' value='Save Goal' className='btn btn-block' />

        </form>



    )

}

export default AddDestination