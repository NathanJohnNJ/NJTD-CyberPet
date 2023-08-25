import '../style.css';
import Bear from '../game/petImages/Bear.gif'
import Bearpng from '../game/petImages/Bear.png'

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
                {(props.isActive)
                ?<>
                    <img className="petImg" src={Bear} alt="bear"></img>
                </>
                :
                <>
                    <img className="petImg" src={Bearpng} alt="bear"></img>
                </>
                }
            </div>
        </div>
    )
}

export default Pet;