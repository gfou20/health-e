import './App.css'
import Title from './components/Title/Title';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='App'>
        <Title />
        <NavBar />
        <div className='box1'>
          <div className='box2'>
            <Home />
          </div>
        </div>
    </div>
  );
}

export default App
