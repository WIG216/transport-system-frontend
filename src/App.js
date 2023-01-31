import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Cars, Contact, Book, SignupPage, LoginPage, DashboardLanding, BookingInfo, Vehicle, Driver } from "./pages";
import Protected from './components/dashboard/form/Protected';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  return (
    <div className="App">
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/cars" element={<Cars />}></Route>
            <Route path="/book" element={<Book />}></Route>

            <Route path="/login" element={(<LoginPage />)} />
            <Route path="/register" element={(<SignupPage />)} />
            <Route path="/dashboard" element={(<Protected><DashboardLanding /> </Protected>)} />
            <Route path="/booking" element={(<Protected><BookingInfo /></Protected> )} />
            <Route path="/vehicle" element={( <Protected><Vehicle /> </Protected>)} />
            <Route path="/driver" element={( <Protected><Driver /> </Protected>)} />
\          </Routes>
        </BrowserRouter>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
