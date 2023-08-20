import '../style.css';
import Fairy from './fairy'
import Dragon from './dragon'
// import { Fairy } from './fairy.js'

const Pet = (props) => {

    const PetDecider = () => {
        if(props.pet==="dragon"){
            return (
               <div>
                <Dragon />
               </div> 
            )
        }else{
            return (
                <div>
                 <Fairy />
                </div> 
             )
        }
        // } else if(props.pet==="fairy"){
        //     return <FairyComplete />
        // } else if (props.pet==="goblin"){
        //     return <Goblin />
        // }else{
        //     return <Grinch />
        // }
    }

    return(
        <div className="petDiv">
            <div className="innerPetDiv">
                <PetDecider/>
            </div>
        </div>
    )
}

export default Pet;