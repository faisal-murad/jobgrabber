
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './auth.module.css'

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (

        <div className={styles.mainContainer}>


            <div className={styles.containerlog}>
                <h2>Sign Up</h2>
                <form className={styles.signupForm} onSubmit={handleSubmit}>
                    <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <input type="tel" placeholder='Enter Phone no' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <br />
                    <select value={gender} onChange={(e) => setGender(e.target.value)} >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <br />
                    <button type='submit'>Sign Up</button>
                    <h4>Do you have an account? <Link to="/login">Login</Link></h4>

                </form>sdsdsd
            </div>
        </div>
    )
};

export default Signup;