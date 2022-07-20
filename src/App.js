import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { HomepageTop } from './Components/Homepage/HomepageTop';
import { Mid } from './Components/Homepage/Mid';


function App() {
  return (
   <div>
  <Navbar/>
 <HomepageTop/>
 <Mid/>
   </div>
  );
}

export default App;
