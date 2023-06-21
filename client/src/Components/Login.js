import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styleseet/login.css';

const Login_Component = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const query = {
            "username" : username,
            "password" : password
        }
        // Call the backend API to handle the login logic
        fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin':'*',
        },
        
        body: JSON.stringify(query),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.message);
             // Handle the response data accordingly
            if(data.message === 'Login successful'){
                toast.success(data.message);
                localStorage.setItem('credentials', JSON.stringify(query.username));
                navigate('/dashboard', {replace: true});
            }else{
                toast.error('Incorrect credentials!')
            }
        })
        .catch((error) => {
            toast.error(error);
            console.error('Error:', error);
        });
    }

    return(
        
        <div className="login-container">
            <h1 className='cb'>Login Page</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="text" className='login-input' value={username} onChange={handleUsernameChange} placeholder='Username'/>
                    <br />
                    <input type="password" className='login-input' value={password} onChange={handlePasswordChange} placeholder='Password'/>
                    <br />
                    <button type="submit" className='login-button'>Login</button>
                </form>
        </div>
    );
}

export default Login_Component;