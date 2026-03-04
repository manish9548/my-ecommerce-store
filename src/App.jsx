import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from "./customer/components/Navigation/Navigation";
import Product from './customer/components/Product/Product';
import HomePage from "./customer/Pages/HomePage/HomePage";


function App() {
  return (
    // w-full aur overflow-x-hidden ensures edge-to-edge look
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      <Navigation />
      <div>
         <HomePage />
       
       <Product/>
      </div>
     
      <Footer/>
    </div>
  );
}

export default App;