import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Game from './pages/game';  
import Home from './pages/home';
import NjCodes from './pages/njcodes';
import Footer from './components/footer';
import NavBar from './components/navbar';


function App() {
  const [gameCookie, setGameCookie] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [petName, setPetName] = useState("");
  const [pet, setPet] = useState({});
  const [hunger, setHunger] = useState(100);
  const [thirst, setThirst] = useState(100);
  const [energy, setEnergy] = useState(100);
  const [happiness, setHappiness] = useState(100);
  const [activity, setActivity] = useState('');
  const [isActive, setIsActive] = useState(false);
	const [isPaused, setIsPaused] = useState(true);
	const [time, setTime] = useState(0);
  

  return (
    <div className="App">
      <div className="mainContent">
        <NavBar gameCookie={gameCookie} setGameCookie={setGameCookie} />
        <Outlet />
        <Footer />
      </div>
    <AnimatePresence mode="wait">
      <Routes> 
          <Route key="home" index element={<Home gameCookie={gameCookie}/>} />
          <Route key="njcodes" path="njcodes" element={<NjCodes />} />
          <Route key="game" path="game" element={<Game activity={activity} isActive={isActive} setIsActive={setIsActive} time={time} setTime={setTime} isPaused={isPaused} setIsPaused={setIsPaused} setActivity={setActivity} gameCookie={gameCookie} setGameCookie={setGameCookie} difficulty={difficulty} setDifficulty={setDifficulty} pet={pet} setPet={setPet} petName={petName} setPetName={setPetName} setHunger={setHunger} hunger={hunger} thirst={thirst} setThirst={setThirst} happiness={happiness} setHappiness={setHappiness} energy={energy} setEnergy={setEnergy} />} />
      </Routes>
    </AnimatePresence>
    </div>
  );
}

export default App;
