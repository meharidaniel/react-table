import React from 'react'

const NotFound = ({match, history}) => {
return ( 
    <div>
        <h1> Not Found {match}</h1> 
        <button className= "btn btn-primary" onClick= {() => history.push('/movies')} >Save</button>
    </div>
)
}
 
export default NotFound;