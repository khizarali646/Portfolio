import React from 'react';
import {SocialIcon} from 'react-social-icons';
import {motion} from "framer-motion"


type Props = {}

const HeaderComponent = ({}: Props) => {
    return (
        <header className="sticky top-0 flex flex-row justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
            <motion.div
                initial={{x: -500, opacity: 0, scale: 0.5}}
                animate={{x: 0, opacity: 1, scale: 1}}
                transition={{duration: 1.5}}
                className="flex flex-row items-center">
                <SocialIcon url="https://facebook.com/" bgColor="transparent" fgColor="gray"/>
                <SocialIcon url="https://linkedin.com/" bgColor="transparent" fgColor="gray"/>
                <SocialIcon url="https://www.instagram.com/khixarali/" bgColor="transparent" fgColor="gray"/>
                <SocialIcon url="https://whatsapp.com/" bgColor="transparent" fgColor="gray"/>
            </motion.div>
            <motion.div
                initial={{x: 500, opacity: 0, scale: 0.5}}
                animate={{x:0, opacity:1 , scale: 1}}
                transition={{duration: 1.5}}
                className="flex flex-row items-center text-gray-400 cursor-pointer">
                <SocialIcon network="email" bgColor="transparent" fgColor="gray"/>
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In touch </p>
            </motion.div>
        </header>

    );
};

export default HeaderComponent;