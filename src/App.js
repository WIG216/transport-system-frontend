import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Cars, Contact, Book, SignupPage, LoginPage, DashboardLanding, BookingInfo, Vehicle, Driver } from "./pages";
import Protected from './components/dashboard/form/Protected';
import { useEffect, useState } from "react";


function App() {

  const [test, setTest] = useState();
  useEffect(() => {
    fetch("http://localhost:7200/driver").then(res=>{
      return res.json();
    }).then(result=>{
      console.log(result)
    })
  
  }, [])
  
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
            <Route path="/dashboard" element={( <DashboardLanding  /> )} />
            <Route path="/booking" element={( <BookingInfo  /> )} />
            <Route path="/vehicle" element={( <Vehicle  /> )} />
            <Route path="/driver" element={( <Driver  /> )} />
\          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
