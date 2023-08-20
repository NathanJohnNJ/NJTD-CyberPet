import { FairyBack, FairyFront, FairyLeft, FairyRight, FairyComplete } from './pets/allPets.js'
import '../style.css';

const Fairy = () => {

    return(
        <div className="mainPet">
            <FairyComplete />
        </div>
    )
}

export default Fairy;