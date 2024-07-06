  
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ShopCategory from './pages/ShopCategory'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSinup'

import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';

import men_banner from '../src/components/Assests/banner_mens.png'
import women_banner from '../src/components/Assests/banner_women.png'
import kids_banner from '../src/components/Assests/banner_kids.png'


function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>

   <Routes>

    <Route path='/' element={<Shop/>}/>
    <Route path='/mens' element={<ShopCategory category ='men' banner={men_banner} />}/>
    <Route path='/womens' element={<ShopCategory category ='women' banner={women_banner }/>}/>
    <Route path='/kids' element={<ShopCategory category ='kid' banner={kids_banner}/>}/>
    

    <Route path='/product' element={<Product/>} >
    <Route path=':productId' element={<Product/>} />
    </Route>

    <Route path='/cart' element={<Cart/>}/>
    <Route path='/loginsignup' element={<LoginSignup/>}/>


   </Routes>
   
   <Footer/>
   
   </BrowserRouter>
    </>
  );
}

export default App;
