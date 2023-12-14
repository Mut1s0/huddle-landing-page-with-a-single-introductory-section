import HeroImage from "./images/illustration-mockups.svg";
import Logo from "./images/logo.svg";
import React from 'react'

function Huddle() {

    return(

        <main className='h-[350px] sm:h-[400px] border-4 border-yellow-500 py-10 sm:max-w-[90%] sm:mx-auto'>

            {/* Container */}

            <div className="">

                <header>

                    <img src={Logo} alt="Logo" className="w-[170px] sm:w-[250px] cursor-pointer" />

                </header>

                <section>

                    <img src={HeroImage} alt="Hero" className="w-full py-10" />

                    <div className="border-4 border-sky-800 text-center">

                        <h1 className="capitalize text-white text-[23px] sm:text-[45px] pb-4">build the community <br /> your fans will love</h1>

                        <p className="text-white text-[14px] sm:text-[25px]">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussions.</p>

                        <button className="block w-[250px] sm:w-[300px] max-w-[100%] py-3 sm:py-5 mx-auto my-6 rounded-[100px] cursor-pointer bg-white sm:text-[25px]">Register</button>

                    </div>

                </section>

                <footer className="flex justify-center items-center gap-3 py-10">

                    <i class='bx bxl-facebook'></i>    
                    <i class='bx bxl-twitter'></i>
                    <i class='bx bxl-instagram'></i>

                </footer>

            </div>

        </main>
    )
}

export default Huddle
