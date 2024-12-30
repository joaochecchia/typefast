import './GameScreen.css'
import Words from '../util/Words.jsx'

const GameScreen = () => {
    return (
        <div className='gameContainer'>
            <div className='menuContainer'>
                <span>Time: {}</span>
                <span>Wrong: {}</span>
                <span>Wright: {}</span>
                <button>restart</button>
            </div>

            <div className='wordsContainer'>
                {Words.map((item, index) => (
                    <span key={index}>{item.word} . </span>
                ))}
            </div>
            <input type="text" placeholder='Start'/>
        </div>
    )
}

export default GameScreen