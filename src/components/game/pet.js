import '../style.css';
import Fairy from '../game/petImages/fairy.gif'

const Pet = (props) => {

    const PetDecider = () => {
        // if(props.pet==="dragon"){
        //     return (
        //        <div>
        //         <Dragon />
        //        </div> 
        //     )
        // }else{
        //     return (
        //         <div>
        //          <img src={Fairy} alt="fairy"></img>
        //         </div> 
        //      )
        // }
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
                {/* <PetDecider/> */}
                <img className="fairyImg" src={Fairy} alt="fairy"></img>
            </div>
        </div>
    )
}

export default Pet;