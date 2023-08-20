
import Intro from '../components/intro';
import { motion } from 'framer-motion';

const Home = (props) => {



    return (
        <div className="home">
            <motion.div
            className="container text-center  bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            >
            <div className="content">
                <Intro gameCookie={props.gameCookie}/>
            </div>
            </motion.div>
        </div>
    )
};

export default Home;