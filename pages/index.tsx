import Head from 'next/head'
import Image from 'next/image'
import {Inter} from '@next/font/google'
import styles from '@/styles/Home.module.css'
import HeaderComponent from "@/components/header/header.component";
import HeroSection from "@/components/hero-section/hero-section";
import BackgroundCircle from "@/components/hero-section/backgroundCircle";


const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
            <Head>
                <title>Portfolio</title>
            </Head>
            <HeaderComponent/>
            <section id="hero" className="snap-center">
                <HeroSection/>
            </section>
        </div>
    )
}
