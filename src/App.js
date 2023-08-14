import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';  
import Game from './pages/game';  
import Home from './pages/home';
import NjCodes from './pages/njcodes';
import Terms from './pages/terms';
import Footer from './components/footer';
import NavBar from './components/navbar';


function App() {
  const [cookie, setCookie] = useState("");
  const [gameCookie, setGameCookie] = useState("");
  const [user, setUser] = useState("");
  const [gameDetails, setGameDetails] = useState({});

  return (
    <div className="App">
      <div className="mainContent">
        <NavBar cookie={cookie} setCookie={setCookie} user={user} setUser={setUser}/>
        

        <Footer />
      </div>

      <Routes> 
          <Route index element={<Home cookie={cookie} setCookie={setCookie} user={user} setUser={setUser} />} />
          <Route path="njcodes" element={<NjCodes cookie={cookie} setCookie={setCookie} user={user} setUser={setUser} />} />
          <Route path="game" element={<Game gameCookie={gameCookie} setGameCookie={setGameCookie} cookie={cookie} setCookie={setCookie} user={user} setUser={setUser} gameDetails={gameDetails} setGameDetails={setGameDetails}/>} />
          <Route path="terms" element={<Terms />} />
      </Routes>
    </div>
  );
}

export default App;
