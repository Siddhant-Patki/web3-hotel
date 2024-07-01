import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button, Form, FormGroup } from 'reactstrap';
import './Signin.css';
import { signin , isAuthenticated , authenticate} from '../auth/index';

function Login() {
    const { user } = isAuthenticated();
    //react hooks
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        redirectTo: null,
    });
    const { email, password, redirectTo } = userData;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setError(false);
        setLoading(false);
        setUserData({ ...userData, [name]: value });
    };
    
    
    // on submit method
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        signin({ email, password }).then((data) => {
            if (data.error) {
                setLoading(false);
                setError(data.error);
                setUserData({
                    ...userData,
                    redirectTo: false,
                });
            } else {
                authenticate(data, () => {
                    setUserData({
                        ...userData,
                        redirectTo: true,
                    });
                    window.location.href="/services";
                    setError(false);
                    setLoading(false);
                });
            }
        });

    };

    const RedirectUser = () => {
        const Navigate = useNavigate();
        if (redirectTo) {
          setUserData({ ...userData });
          setLoading(false);
          if (user && user.role == 1) return Navigate("/contact");
          return Navigate("/services");
          
        }
      };
    return (
        <div className="wrapper">
            <span className="icon-close"><ion-icon name="close"></ion-icon></span>
            <div className="form-box login">
                <h2>Login</h2>
                <form id="loginForm" >
                    <div className="input-box">
                        <span className="icon">
                            <ion-icon name="mail"></ion-icon>
                        </span>
                        <input type="email" id="email" name='email' required value={userData.email} onChange={handleChange} />
                        <label for="username">Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon">
                            <ion-icon name="lock-closed"></ion-icon>
                        </span>
                        <input type="password" id="password" name='password' required value={userData.password} onChange={handleChange} />
                        <label for="password">Password</label>
                    </div>
                    <button className="btn" onClick={handleSubmit}>Login</button>
                    <div className="login-register">
                        <p>Don't have an account ?<Link to="/signup" className="register-link"> Register</Link></p>
                    </div>
                </form>
            </div>
            {/* {RedirectUser()}; */}
        </div>
    )
}

export default Login;