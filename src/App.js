// import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import RoomPage from './components/pages/RoomPage';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login'
import SignUp from './components/SignUp';
// import Login from './components/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';



function App() {
  
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
      <Route path='/' element={<SignUp/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/room' element={<RoomPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/signup' element={<SignUp/>} /> */}
      </Routes>
      <Home/>
      <About />
      <RoomPage/>
      <Contact />
      
   </div>
  )
};

export default App;
