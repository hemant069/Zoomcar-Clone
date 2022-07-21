import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Homepage/Navbar';
import { HomepageTop } from './Components/Homepage/HomepageTop';
import { Mid } from './Components/Homepage/Mid';
import { Login } from './Components/Sign&Login/Login';
import { DetailForm } from './Components/Sign&Login/DetailForm';
import { BookingCars } from './Components/Booking Cars/BookingCars';


function App() {
  return (
   <div>
  {/* <Login/> */}
  {/* <DetailForm/> */}
  <BookingCars/>
   </div>
  );
}

export default App;
