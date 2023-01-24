import '../App.css';
import { ContactHeader } from '../components/UI/ContactHeader';
import { Footer } from '../components/UI/Footer';
import { Form } from '../components/UI/Form';
import { NavBar } from '../components/UI/NavBar';

function App() {
  return (
    <div className='main'>
    <NavBar />
    <ContactHeader />
    <Form />
    <Footer />
    </div>
  );
}

export default App;