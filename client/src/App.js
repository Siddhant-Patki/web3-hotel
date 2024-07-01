import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./core/Home";
import About from "./core/About";
import Services from "./core/Services";
import Contact from "./core/Contact";
import Nav from "./Nav";
import Login from "./components/Signin/Login";
import getWeb3 from './getWeb3';
import Register from './components/Signup/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminRoutes from './components/auth/AdminRoutes';
import Dashboard from './components/Dashboards/Dashboard';

class App extends React.Component {


  //state = { data: [{ name: "abc" },{ name: "xyz" },{ name: "qwe" }] }
  data = [
    { name: 'Luxury Room' },
    { name: 'Deluxe Room' },
    { name: 'Economy Room' },
    { name: 'AC Room' },
    { name: 'Non AC' },
    { name: 'Presidential Room' },
  ];


  render() {
    return (
      <>

        <BrowserRouter>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route path="/services" element={<Services
              data={this.data}
            />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/signin" element={<Login />}></Route>
            <Route path="/signup" element={<Register />}></Route>
            <Route
              path="/admin/dashboard"
              element={
                <AdminRoutes>
                  <Dashboard />
                </AdminRoutes>
              }
            />
          </Routes>
        </BrowserRouter>


      </>
    );

  }
}

export default App;
