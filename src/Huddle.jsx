import HeroImage from "./images/illustration-mockups.svg";
import Logo from "./images/logo.svg";
import React from 'react'

function Huddle() {

    return(

        <main className='h-[350px] sm:h-[600px] md:h-auto min-[820px]:h-screen py-10 sm:max-w-[90%] min-[992px]:max-w-[100%] min-[1024px]:max-w-[85%] sm:mx-auto min-[992px]:grid min-[992px]:content-center'>

            {/* Container */}

            <div className="min-[820px]:flex min-[820px]:flex-col">

                <header className="min-[992px]:py-10 min-[1024px]:pb-[70px]">

                    <img src={Logo} alt="Logo" className="w-[170px] sm:w-[250px] min-[992px]:w-[200px] min-[1024px]:w-[300px] cursor-pointer" />

                </header>

                <section className="min-[992px]:grid min-[992px]:grid-cols-2 min-[992px]:gap-20">

                    <img src={HeroImage} alt="Hero" className="w-full py-10 h-full" />

                    <div className="text-center min-[992px]:text-left min-[820px]:grid min-[820px]:content-center">

                        <h1 className="capitalize text-white text-[23px] sm:text-[45px] pb-4 min-[1280px]:pb-7 min-[992px]:text-[40px] min-[1280px]:text-[50px]">build the community <br /> your fans will love</h1>

                        <p className="text-white text-[14px] sm:text-[16px] min-[1280px]:text-[18px]">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussions.</p>

                        <button className="block w-[250px] sm:w-[300px] lg:w-[250px] max-w-[100%] py-3 sm:py-5 mx-auto my-6 min-[1280px]:my-11 rounded-[100px] cursor-pointer bg-white sm:text-[25px] min-[992px]:ml-0 min-[1024px]:text-[22px]">Register</button>

                    </div>

                </section>

                <footer className="flex justify-center items-center gap-10 py-10 min-[992px]:justify-end">

                    <i class='bx bxl-facebook'></i>    
                    <i class='bx bxl-twitter'></i>
                    <i class='bx bxl-instagram'></i>

                </footer>

            </div>

        </main>
    )
}

export default Huddle
