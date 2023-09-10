
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './auth.module.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sign In: ', email, password);
        if (email === "" && password === "") {
            Navigate("/main");
        }
        else {
            alert("Invalid credentials");
        }


    }
    return (

        <div className={styles.mainContainer}>
            <div className={styles.containerlog}>
                <h2>Login</h2>
                <form className={styles.signupForm} onSubmit={handleSubmit}>
                    <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <button type='submit' className={styles.login}>Login</button>

                    <h4>Don't have an account? <Link to="/signup">Sign Up</Link></h4>
                </form>
            </div>
        </div >
    )
};

export default Login;