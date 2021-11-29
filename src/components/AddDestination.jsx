import React from 'react';

const AddDestination = () => {
    return (

        <form className='destination-form'>
            <div className='form-component'>
                <label>Name</label>
                <input type='text' placeholder='Add new goal' />
            </div>
            <div className='form-component'>
                <label>Description</label>
                <textarea placeholder='What is it about?' />
            </div>
            <div className='form-component'>
                <label>Type</label>
                <div className="form-component-select">
                    <div>
                        <input type="radio" name="city" id="city" />
                        <label htmlFor="city">City</label>
                    </div>
                    <div>
                        <input type="radio" name="monument" id="monument" />
                        <label htmlFor="monument">Monument</label>
                    </div>
                    <div>
                        <input type="radio" name="activity" id="activity" />
                        <label htmlFor="activity">Activity</label>
                    </div>
                </div>
            </div>

            <input type='submit' value='Save Goal' className='btn btn-block' />

        </form>



    )

}

export default AddDestination