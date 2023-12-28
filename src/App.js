
import './App.css';
import About from './pages/About';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage'; 
import {BrowserRouter,Route,Routes} from "react-router-dom"
import SingleProduct from './pages/SingleProduct';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path = "/shop" element={<ShopPage/>}/>
      <Route path = "/blog" element={<Blog/>}/>
      <Route path = "/about" element={<About/>}/>
      <Route path = "/contact us" element={<ContactUs/>}/>
      <Route path = "/product/:id" element={<SingleProduct/>}/>
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
