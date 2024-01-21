/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useRef, useState } from 'react'
import './Game.css'

export const Game = ({
    verifyLetter,
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wrongdLetters,
    guesses,
    score
}) => {

    const [letter, setLetter] = useState('');
    const letterInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        verifyLetter(letter)
        setLetter('')
        letterInputRef.current.focus();
    };

    return (

        <div className="game">
            <p className="points">
                <span>Pontuação: {score}</span>
            </p>
            <h1>Adivinhe a palavra:</h1>
            <h3 className="tip">
                Dica sobre a palavra: <span>{pickedCategory}</span>
            </h3>
            <p>Você ainda tem {guesses} tentativas</p>
            <div className="wordContainer">
                {letters.map((letter, id) => (
                    guessedLetters.includes(letter) ? (
                        <span className="letter" key={id}> {letter}</span>
                    ) : (
                        <span className="blankSquare" key={id}></span>)
                ))}
            </div>
            <div className="letterContainer">
                <p>Tente adivinhar uma letra da palavra:</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name='letter'
                        maxLength={1}
                        required
                        onChange={(e) => setLetter(e.target.value)}
                        value={letter}
                        ref={letterInputRef}
                    />
                    <button>Jogar!</button>
                </form>
            </div>
            <div className="wrongLettersContainer">
                <p>Letras já ultilizadas: </p>
                {wrongdLetters.map((letter, id) => (
                    <span key={id}>{letter}, </span>
                ))}
            </div>
        </div>
    )
}
