import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PlaceToStay from './pages/PlaceToStay';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path='/' exact component={Home} />
      <Route path='/placetostay' component={PlaceToStay} />
      <Footer />
    </div>
  );
}

export default App;
