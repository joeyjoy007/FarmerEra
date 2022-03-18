
import './App.css';
import PanVerification from './components/PanVerification';
import AAdhar from './components/AAdhar';
import Home from './components/home/Home';
import SidebarWithHeader from './components/Index/MainPage';
import CallToActionWithAnnotation from './components/screens/Screen';
import {

  Routes,
  Route,
} from "react-router-dom";
import SimpleCard from './components/login/Login';
import WithSubnavigation from './components/navbar/Navbar';

import Simple from './components/singleItem/SingleItem';
import ThreeTierPricingHorizontal from './components/buypage/BuyPage';
import Paginationn from './components/utils/Pagination';

function App() {
  return (
    <div className="App">

<Routes>

  <Route index element={<CallToActionWithAnnotation/>} />
  <Route path="/screen" element={<SidebarWithHeader/>}/>
    <Route path="/registerScreen" element={<Home/>} />
    <Route path="/login" element={<SimpleCard/>} />
    <Route path="/singleItem/:id" element={<Simple/>} />
    <Route path="/buyPage/:id" element={<ThreeTierPricingHorizontal/>} />
    <Route path="/pagination" element={<Paginationn/>} />
  
  

</Routes>


    </div>
  );
}

export default App;
