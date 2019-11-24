import React from 'react'

const Input = ({name, lable, value, error, onChange, }) => {

    return ( <div className="form-group">
    <label htmlFor={name}>
        {lable}
    </label>
    <input 
        value= {value}
        onChange= {onChange}
        name= {name}
        id= {name} 
        type="text" 
        className="form-control"
    />
    {error && <div className="alert alert-danger">{error}</div>}
</div>
 );
}
 
export default Input;