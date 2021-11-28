const AddDestination = () => {
    return (
        
        <form className = 'destination-form'>
            <div className = 'form-component'> 
                <label>Name</label>
                <input type = 'text' placeholder = 'Add new goal'/>
            </div>
            <div className = 'form-component'> 
                <label>Description</label>
                <input type = 'text' placeholder = 'What is it about?'/>
            </div>
            <div className = 'form-component'> 
                <label>Type</label>
                <select className='form-component-select'>
                    <option value="city">City</option>
                    <option value="Monument">Monument</option>
                    <option value="Activity">Activity</option>
                </select>
            </div>
            <div className = 'form-component form-component-check'> 
                <label>Done</label>
                <input type = 'checkbox'/>
            </div>
            
            <input type='submit' value= 'Save Goal'  className='btn btn-block' />
            
        </form>


        
    )

}

export default AddDestination