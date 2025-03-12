import React from "react"
import HeroSection from "../section/home/HeroSection"
import AboutUs from "../section/home/AboutUs"
import Products from "@/section/home/products"
import Network from "@/section/home/Network"

const Home = () =>{
    return(
        <div className="w-full flex justify-center">
            <div className='w-full flex flex-col bg-white max-w-[1600px]'>
            <HeroSection/>
            <AboutUs/>
            <Products/>
            <Network/>
            </div>
        </div>

    )
}

export default Home