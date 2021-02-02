import React,{useState, useEffect} from 'react';
import Header from './component/Header';
import Figure from './component/Figure';
import Wrongletters from './component/WrongLetteres';
import Word from './component/Word';
import PopUp from './component/PopUp';
import Notification from './component/Notification';
import {showNotification as show} from './helper/helper';


import './App.css';

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

// let playable = true;

// const correctLetters = [];
// const wrongLetters = [];

function App() {
  const[playable, setPlayable] = useState(true);
const[correctLetters, setCorrectLetters] = useState([]);

const[wrongLetters, setWrongLetters] = useState([]);
const[showNotification, setShowNotification] = useState(false);

useEffect(() => {
  const handleKeydown = event => {
    const {key, keyCode} = event;
    if (playable && keyCode >= 65 && keyCode <= 90) {
      
        const letter = key.toLowerCase();
  
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
  
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(wrongLetters => [...wrongLetters, letter]);
  
            
          } else {
            show(setShowNotification);
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeydown);  
    
return () => window.removeEventListener('keydown', handleKeydown);

  
}, [correctLetters, wrongLetters, playable]);


function playAgain() {
  setPlayable(true);

  // empty arry
  setCorrectLetters([]);
  setWrongLetters([]);

  const random = Math.floor(Math.random() * words.length);
  selectedWord = words[random];
}



  return(
    <>
    <Header />
    <div className="game-container">
      <Figure wrongLetters={wrongLetters} />
      <Wrongletters wrongLetters={wrongLetters} />
      <Word  selectedWord={selectedWord} correctLetters={correctLetters} />
    </div>
    <PopUp correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
