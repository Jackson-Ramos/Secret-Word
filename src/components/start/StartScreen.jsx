/* eslint-disable react/prop-types */
import "./StartScreen.css"

export const StartScreen = ({ startGame }) => {


    return (

        <div className="start" >
            <h1>secret Word</h1>
            <p>Click no botão a baixo para começar a jogar</p>
            <button onClick={() => startGame()}>Começar o jogo</button>
        </div>
    )
}



