import '../App.css';
import { Content } from '../components/UI/Content';
import { Content2 } from '../components/UI//Content2';
import { Feature } from '../components/UI//Features';
import Header from '../components/UI//Header';
import Product from '../components/UI//Product';
import { Stats } from '../components/UI//Stats';
import { Teams } from '../components/UI//Teams';
import { NavBar } from '../components/UI/NavBar';
import { Footer } from '../components/UI/Footer';

function App() {
  return (
    <div className='main'>
    <NavBar />
    <Header />
    <Stats/>
    <Feature />
    <Content />
    <Product />
    <Content2 />
    <Teams />
    <Footer />
    </div>
  );
}

export default App;

