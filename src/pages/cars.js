import '../App.css';
import Product from '../components/UI/Product';
import { NavBar } from '../components/UI/NavBar';
import { Footer } from '../components/UI/Footer';

function App() {
  return (
    <div className='main'>
    <NavBar />
    <Product />
    <Footer />
    </div>
  );
}

export default App;

