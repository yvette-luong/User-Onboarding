import React from 'react';


const User = (props) => {
const {details} = props

    return(
        <div>
          <h3>User Name : {details.first_name} </h3>
              <p>Email : {details.email}</p>
              <p>Password: {details.password}</p>
        </div>
      )   
}

export default User