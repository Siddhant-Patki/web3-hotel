import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';
import { isAuthenticated, signout } from "./components/auth/index";

export default function Nav() {
  const { user } = isAuthenticated();
  return (
    <>
        <div className="header">
        <header>
            <h1 className="lets-Play"><Link to="/" className="logo">SmartStay</Link></h1>
            <nav className="navigation">
                <Link className="navs" to="/">Home</Link>
                <Link className="navs" to="/services">Services</Link>
                <Link className="navs" to="/contact">Contact</Link>
                {isAuthenticated() &&( 
                  <Link className="navs" to={user.role === 1 ? "/admin/dashboard" : "/user/dashboard"}>DashBoard</Link>
                )}
                <Link className="btnLogin-popup" to="/signin">Login</Link>
            </nav>
        </header>
        </div>
    </>
  )
}
