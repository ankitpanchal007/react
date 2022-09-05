import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../Features/user';

function Login() {
  const dispatch=useDispatch();
  return (
    <div>
      <button onClick={()=>{dispatch(login({name :"Ankit",age:23, email:"ankit@gmail.com"}))}}>Login</button>
      <button onClick={()=>{dispatch(logout())}}>Logout</button>
    </div>    
  )
}

export default Login