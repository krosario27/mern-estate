import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/CreateListing'
import UpdateListing from './pages/UpdateListing'
import Listing from './pages/Listing'
import Search from './pages/Search'

import axios from "axios"; // Import Axios


const BACKEND_URL = "https://mern-estate-vr0t.onrender.com"; // Backend URL
const PING_INTERVAL = 300000; // Ping every 5 minutes (300,000 ms)

export default function App() {


  useEffect(() => {
    const pingServer = () => {
      axios.get(BACKEND_URL)
        .then(response => {
          console.log(`Ping successful at ${new Date().toISOString()}: ${response.status}`);
        })
        .catch(error => {
          console.error(`Ping failed at ${new Date().toISOString()}:`, error.message);
        });
    };

    // Set interval to keep the backend alive
    const intervalId = setInterval(pingServer, PING_INTERVAL);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/listing/:listingId" element={<Listing />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/update-listing/:listingId" element={<UpdateListing />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}
