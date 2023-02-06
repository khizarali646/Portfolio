import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import BackgroundCircle from "@/components/hero-section/backgroundCircle";


const HeroSection = () => {
    const [text, count] = useTypewriter({
        words: ['Hi! My Name is Khizar', 'In Future Full Stack Developer '],
        loop: true,
        delaySpeed: 2000,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-8 text-center overflow-hidden">
            <BackgroundCircle/>
            <img src="/khizar.jpeg" className="rounded-full h-32 w-32 relative object-cover"/>
            <div>
                <h2 className="text-gray-500 uppercase text-sm pb-2 tracking-[15px]">Full Stack Developer</h2>
                <h1 className="text-2xl lg:text-3xl font-semibold px-10"><span>{text}</span>
                    <Cursor cursorColor='#F7AB0A'/>
                </h1>
            </div>


        </div>
    );
};

export default HeroSection;