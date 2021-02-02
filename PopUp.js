import React, {useEffect} from 'react'
import {checkWin} from '../helper/helper';


const PopUp = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = '';
  let finalMessageReavealWord = '';
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord, setPlayable) === 'win') {
    finalMessage = 'Congratulation! You won!';
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord, setPlayable) === 'lose') {
    finalMessage = 'Unfortunately you lost.';
    finalMessageReavealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => setPlayable(playable));
    

    return (
     <div class="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
        <div class="popup">
          <h2> {finalMessage} </h2>
          <h3> {finalMessageReavealWord} </h3>
          <button onClick={playAgain}>Play Again</button>
        </div>
      </div>
    )
}

export default PopUp
