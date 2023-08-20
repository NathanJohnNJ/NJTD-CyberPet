import { motion } from 'framer-motion';

const NjCodes = (props) => {

    return (
        <div className="njcodes">
            <motion.div
            className="container text-center  bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            >
                <h1 className="njTitle">NJ CODES</h1>
            </motion.div>
        </div>
    )
};

export default NjCodes;