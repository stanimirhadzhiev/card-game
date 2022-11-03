import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';


import './App.css';

import {Start} from './components/Start/Start';
import {GamePlay} from './components/GamePlay/GamePlay';
import {GameOver} from './components/GameOver/GameOver';


const cardImages = [
  {"src" : "/img/1.png", matched: false},
  {"src" : "/img/2.png", matched: false},
  {"src" : "/img/3.png", matched: false},
  {"src" : "/img/4.png", matched: false},
  {"src" : "/img/5.png", matched: false},
  {"src" : "/img/6.png", matched: false},
  {"src" : "/img/7.png", matched: false},
  {"src" : "/img/8.png", matched: false},
  {"src" : "/img/9.png", matched: false}
]



function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [score, setScore] = useState(0);
  
 

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))

      
    setCards(shuffledCards)
    setTurns(0)
    setScore(0)
  };


  
  useEffect(() => {
    shuffleCards()
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start shuffleCards = {shuffleCards} />} />

        <Route path="/game-play" 
          element={<GamePlay cards={cards} turns={turns} score={score} setTurns={setTurns} setCards={setCards}  setScore={setScore}/>} 
        />
        <Route path="/game-over" element={<GameOver turns={turns} score={score}/>} />
      </Routes>
    </div>
  );
}

export default App;
