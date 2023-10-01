import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(null); // State variable for error messages

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.includes("@gmail.com")) {
            setError(null); // Clear any previous error message
            console.log("Login successful!");
            props.onFormSwitch('todolist');
        } else {
            setError("Incorrect email or password. Please try again.");
        }
    }

    return (
        <div className="auth-form-container">
            <h2>LOG IN</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                {error && <div className="error-message">{error}</div>} {/* Display error message if error state is not null */}
                <button className="link-btn" type="submit">LOGIN</button>
            </form>

            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}
