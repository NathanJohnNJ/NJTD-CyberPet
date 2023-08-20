import { motion } from 'framer-motion';

const Terms = () => {

    return (
        <div className="termsAndConds">
            <motion.div
            className="container text-center  bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            >
                <h1>TERMS & CONDITIONS</h1>
            </motion.div>
        </div>
    )
};

export default Terms;