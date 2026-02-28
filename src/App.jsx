import './App.css';
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/Pages/HomePage/HomePage";

function App() {
  return (
       <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      <Navigation />
      <HomePage />
    </div>
  );
}

export default App;