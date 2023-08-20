import { DragonLeft, DragonRight, DragonComplete } from './pets/allPets.js'
import '../style.css';

const Dragon = () => {

    return(
        <div className="mainPet">
            <DragonComplete />
        </div>
    )
}

export default Dragon;