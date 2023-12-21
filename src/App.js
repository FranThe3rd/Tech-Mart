import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Cart from './pages/cart/cart';
import Shop from './pages/shop/shop';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/"element={<Shop />} />
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
