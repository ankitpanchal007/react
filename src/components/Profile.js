import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
    const user = useSelector((state) => state.user.value);
    return (
        <div>
            <h1>Profile Page</h1>
            <p>name:{user.name}</p>
            {/* <input id='name1' placeholder='write name'></input> */}
            <p>age:{user.age}</p>
            <p>email:{user.email}</p>
        </div>
    )
}

export default Profile