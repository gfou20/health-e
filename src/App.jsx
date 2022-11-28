import './App.css'
import { Route, Routes } from 'react-router-dom';
import Title from './components/Title/Title';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Journal from './pages/Journal/Journal';
import Contacts from './pages/Contacts/Contacts';

function App() {
  return (
    <div className='App'>
        <Title />
        <NavBar />
        <div className='box1'>
          <div className='box2'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/journal' element={<Journal />} />
              <Route path='/contacts' element={<Contacts />} />
            </Routes>
          </div>
        </div>
    </div>
  );
}

export default App
