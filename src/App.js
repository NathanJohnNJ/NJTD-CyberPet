import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Game from './pages/game';  
import Home from './pages/home';
import NjCodes from './pages/njcodes';
import Terms from './pages/terms';
import Footer from './components/footer';
import NavBar from './components/navbar';


function App() {
  const [cookie, setCookie] = useState("");
  const [gameCookie, setGameCookie] = useState("");
  const [user, setUser] = useState("notLoggedIn");
  const [gameDetails, setGameDetails] = useState({});
  const [difficulty, setDifficulty] = useState("");
  const [petName, setPetName] = useState("");
  const [pet, setPet] = useState({});
  const [hunger, setHunger] = useState(0);
  const [thirst, setThirst] = useState(0);
  const [energy, setEnergy] = useState(100);
  const [happiness, setHappiness] = useState(100);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    setGameDetails({
      pet: pet,
      petName: petName,
      level: level,
      stats: {
          hunger: hunger,
          thirst: thirst,
          energy: energy,
          happiness: happiness,
          difficulty: difficulty
      }
    })
  }, [])
  

  return (
    <div className="App">
      <div className="mainContent">
        <NavBar cookie={cookie} setCookie={setCookie} user={user} setUser={setUser} gameDetails={gameDetails} gameCookie={gameCookie} setGameCookie={setGameCookie} setGameDetails={setGameDetails} />
        

        <Footer />
      </div>

    <AnimatePresence mode="wait">
      <Routes> 
          <Route key="home" index element={<Home cookie={cookie} setCookie={setCookie} user={user} setUser={setUser} />} />
          <Route key="njcodes" path="njcodes" element={<NjCodes cookie={cookie} setCookie={setCookie} user={user} setUser={setUser} />} />
          <Route key="game" path="game" element={<Game gameCookie={gameCookie} setGameCookie={setGameCookie} cookie={cookie} setCookie={setCookie} user={user} setUser={setUser} gameDetails={gameDetails} setGameDetails={setGameDetails} difficulty={difficulty} setDifficulty={setDifficulty} pet={pet} setPet={setPet} petName={petName} setPetName={setPetName} setHunger={setHunger} hunger={hunger} thirst={thirst} setThirst={setThirst} happiness={happiness} setHappiness={setHappiness} energy={energy} setEnergy={setEnergy} level={level} setLevel={setLevel} />} />
          <Route key="terms" path="terms" element={<Terms />} />
      </Routes>
    </AnimatePresence>
    </div>
  );
}

export default App;
