
import './App.css';

import { HomepageTop } from './Components/Homepage/HomepageTop';
import { Mid } from './Components/Homepage/Mid';
import { Login } from './Components/Sign&Login/Login';
import { DetailForm } from './Components/Sign&Login/DetailForm';
import { BookingCars } from './Components/Booking Cars/BookingCars';
import { CarDetails } from './Components/Data/CarDetails';



function App() {
  return (
   <div>
  {/* <Login/> */}
  {/* <DetailForm/> */}
  
  <BookingCars/>
  {/* <CarDetails/> */}
   </div>
  );
}

export default App;
