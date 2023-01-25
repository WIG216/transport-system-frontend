import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Cars, Contact, Book } from "./pages";

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
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
