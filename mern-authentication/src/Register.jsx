import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
function Register() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('') ;
    const [password, setPassword] = useState('');  

    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
       
        axios.post('http://localhost:3001/register', {
            name: name,
            email: email,
            password: password
        }).then(function (response) {
            console.log(response.data);
            alert('Registration successful!');
            navigate('/login'); // Redirect to login page after successful registration
        })
        .catch(function (error) {
            console.log(error);
            alert('Registration failed!');
        });
    };
    return (
        <>
        <div className="container" style={{ paddingTop: "50px" }}>
            <h1 className="text-center">Register</h1>
        </div>
    <form className="align-items-left" onSubmit={handleSubmit} style={{  marginleft: "0px", paddingTop: "50px" }}>
        <div class="form-group">
            <label for="exampleInputEmail1" >Name</label>
            <input type="text" value={name} name='name' onChange={(event)=> setName(event.target.value)} class="form-control" id="exampleInputName" aria-describedby="nameHelp" />
            
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" value={email} name="email" onChange={(event)=> setEmail(event.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" value={password} name="password" onChange={(event)=> setPassword(event.target.value)}class="form-control" id="exampleInputPassword1" />
        </div>
        <br />
        <button type="submit" class="btn btn-primary">Register</button>
    </form>
    </>)

}

export default Register
