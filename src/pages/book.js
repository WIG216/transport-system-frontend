import '../App.css';
import { NavBar } from '../components/UI/NavBar';
import { Footer } from '../components/UI/Footer';
import { DriverForm } from '../components/UI/DriverForm';

function App() {
  return (
    <div className='main'>
    <NavBar />
    <DriverForm />
    <Footer />
    </div>
  );
}

export default App;
