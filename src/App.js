import logo from './logo.svg';
import './App.css';
import End from './Components/End';
import Letship from './Components/Letship';
import Our_customer from './Components/Our_customers';
import Hero2 from './Components/Hero2';
import Hero from './Components/Hero';
import Hero3 from './Components/Hero3';
import Navbar from './Components/navbar';


function App() {
  return (
    <div className="App ">
        <navbar/>
        <Hero />
      <Hero2/>
      <Hero3/>
     <Our_customer/>
    <Letship/>
    <End/>
    </div>
  );
}

export default App;
