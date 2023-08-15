import '../style.css';
import Modal from 'react-modal';
import { useState } from 'react';

// Happiness, Hunger, Thirst, Energy
// Level, Difficulty
// Type, Name

const Stats = (props) => {
    const [hunger, setHunger] = useState(0);
    const [thirst, setThirst] = useState(0);
    const [energy, setEnergy] = useState(0);
    const [happiness, setHappiness] = useState(0);
    const [level, setLevel] = useState(1);
    
    props.setGameDetails({
        character: props.chosenCharacter,
        characterName: props.characterName,
        level: level,
        stats: {
            hunger: hunger,
            thirst: thirst,
            energy: energy,
            happiness: happiness,
            difficulty: props.difficulty
        }
    })
    
    
    return(
        <div className="statsDiv">
           
        </div>
    )
}

export default Stats;