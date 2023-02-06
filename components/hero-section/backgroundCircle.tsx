import React from 'react';
import {motion} from "framer-motion"

const BackgroundCircle = () => {
    return (
        <motion.div
            initial={{ opacity: 0,}}
            animate={{opacity: [0.1,0.2,0.2,0.8,0.1,1.0], scale: [1,2,2,3,1]}}
            transition={{duration: 2.5}}
            className="relative flex justify-center items-center">
            <div className=" border-[#333333] rounded-full w-[200px] h-[200px] absolute mt-52 animate-ping" />
            <div className=" border border-[#333333] rounded-full w-[300px] h-[300px] absolute mt-52 " />
            <div className=" border border-[#333333] rounded-full w-[500px] h-[500px] absolute mt-52 " />
            <div className=" border border-[#F7AB0A] opacity-20 rounded-full w-[600px] h-[600px] absolute mt-52 animate-pulse" />
            {/*<div className="absolute border border-[#333333] rounded-full w-[800px] h-[800px] mt-52 " />*/}
        </motion.div>
    );
};

export default BackgroundCircle;