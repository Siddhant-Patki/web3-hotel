import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signup } from '../auth/index';
import './Signup.css';

function Register() {
    //navigateTo
    const navigate = useNavigate();
    //react hooks
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
    });
    const [redirect, setRedirect] = useState(false);
    const [msg, setMsg] = useState({
        msgType: "",
        message: "",
    });
    //on Change method
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    //on submit method
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await signup(userData);
        if (user.error) {
            setMsg({
                msgType: "error",
                message:
                    user.error.code === 11000
                        ? "Email already exist! Try signing in."
                        : user.error.code,
            });
        } else setRedirect(true);
    };

    //redirect method
    const redirectUser = () => {
        if (redirect) {
            navigate("/signin", { replace: true });
        }
    };
    //show error or success alert
    // const showMsg = () => {
    //     return (
    //         alert.message={msg}// msg && <ErrorHandler alertMessage={msg.message} alertType={msg.msgType} />
    //     );
    // };
    // handleSubmit = event =>{
    //     event.preventDefault();
    //     console.log(this.state,"state changed");
    //     console.log(event.target.value);
    //     const data = this.state;
    //     fetch("http://localhost:8000/register",{
    //         method:"POST",
    //         headers: {
    //             "Content-type": "application/json",
    //         },
    //         body: JSON.stringify(
    //             data
    //         ),

    //     }).then((res)=>{
    //         console.log(res);
    //     })
    // };
    return (
        <div className="registerPage">
            {/* {showMsg()} */}
            <div className="wrapper">
                <span className="icon-close"><ion-icon name="close"></ion-icon></span>
                <div className="form-box login">
                    <h2>Register</h2>
                    <form >
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="person"></ion-icon>
                            </span>
                            <input type="name" name="name" id="name" value={userData.name} required onChange={handleChange}
                            />
                            <label for="name">Name</label>
                        </div>
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="mail" ></ion-icon>
                            </span>
                            <input type="email" name="email" id="email" value={userData.email} required onChange={handleChange}
                            />
                            <label for="email">Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="lock-closed"></ion-icon>
                            </span>
                            <input type="password" name="password" id="password" value={userData.password} required onChange={handleChange}
                            // minLength={8} maxLength={16} pattern={'^[A-Za-z0-9]+$'}
                            />
                            <label for="password">Password</label>
                        </div>

                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="home"></ion-icon>
                            </span>
                            <input type="address" name="address" id="address" value={userData.address} required onChange={handleChange}
                            />
                            <label for="address">Address</label>
                        </div>
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="chatbubble-ellipses"></ion-icon>
                            </span>
                            <input type="number" name="phone" id="phone" value={userData.phone} required onChange={handleChange}
                                // minLength={10} maxLength={10} 
                                />
                            <label for="phone">Phone Number</label>
                        </div>

                        <button className="btn" onClick={handleSubmit}>Signup</button>
                        <div className="login-register">
                            <p>Already have an account?<Link href="index.html" className="register-link">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
            {redirectUser()}
        </div>
    )
}

export default Register;