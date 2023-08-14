import { NavLink } from 'react-router-dom';
import Intro from '../components/intro';

const Home = (props) => {



    return (
        <div className="home">
            <div className="content">
                <Intro cookie={props.cookie} />
            </div>
        </div>
    )
};

export default Home;