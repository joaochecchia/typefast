import './StartScreen.css'

const StartScreen = ( {setGameState} ) => {
    return (
        <div className='startContainer'>
            <h1>Type Fast</h1>
            <button onClick={() => setGameState('game')}>Começar</button>
        </div>
    )
}

export default StartScreen