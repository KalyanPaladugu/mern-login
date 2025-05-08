import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { useState } from 'react';
function Login() {

    const navigate = useNavigate(); // Initialize useNavigate hook
    
    const [email, setEmail] = useState(''); // State for email  
    const [password, setPassword] = useState(''); // State for password
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Add your login logic here (e.g., API call)
        // For example, you can use axios to send a POST request to your backend 
        axios.post('http://localhost:3001/login', {
            email: email,
            password: password
        }).then(function (response) {
            console.log(response.data);
            alert('Login successful!');
            navigate('/home'); // Redirect to home page after successful login
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name="email" onChange={(e)=> setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name="password"  onChange={(e)=> setPassword(e.target.value)}class="form-control" id="exampleInputPassword1" />
                </div>
               
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>)

}

export default Login;
