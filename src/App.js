import Home from "./components/common/Home";
import Footer from "./components/common/Footer";
import Navigation from "./components/navigation/Navigation";
import DoctorsList from "./components/doctors/DoctorsList";
import DetailView from "./components/doctors/DetailedView/DetailedView";
import { Routes, Route } from 'react-router-dom'
import RegisterUser from "./components/authentication/RegisterUser";

import "./App.css";

function App() {
  return (
    <div className="font-thin h-screen w-screen dark:bg-gray-500" >
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element = {<RegisterUser />}/>
        <Route path="/vets" element={<DoctorsList />} />
        <Route path="/vets/:id" element={<DetailView />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
