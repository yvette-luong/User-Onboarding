import React from 'react';


 const Form = (props) => {
    const onSubmit = evt => {

    }
    const onCheckboxChange = evt => {

    }
    const onInputChange = evt => {
        
    }
    return (
        <div>
            
            <form className= "form-container" onSubmit={[]}>
               

                <div className="errors">
                    <div>{[]}</div>
                    <div>{[]}</div>
                    <div>{[]}</div>
                    <div>{[]}</div>
                </div>

                <h4>General Infor</h4>
                <label>
                    <p>Name</p>
                    <input
                    name='name'
                    type='text'
                    value={[]}
                    onChange={[]}
                    />
                </label>
                
                <p>Add New User</p>
                <button disabled={[]}>Submit</button>

            </form>
        </div>
    )
}

export default Form