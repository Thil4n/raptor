import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import Team from "./team";
import About from "./about";
import Footer from "./footer";

const Home = () => {
    const [menuState, setMenuState] = useState(false);
    const getMenuClasses = () => {
        let classList =
            "inset-0 transition-all bg-white/70 backdrop-blur-xl z-20 md:static md:bg-transparent md:flex items-center justify-center space-y-8 md:space-y-0 md:space-x-8 flex-col md:flex-row lg:space-x-14 ";
        classList += menuState ? "fixed flex" : "hidden";
        return classList;
    };

    // const handleNavigation = (e) => {
    //     console.log(e);
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", (e) => handleNavigation(e));

    //     return () => {
    //         // return a cleanup function to unregister our function since its gonna run multiple times
    //         window.removeEventListener("scroll", (e) => handleNavigation(e));
    //     };
    // }, []);

    return (
        <div id="home" className="">
            <img
                className="ufo w-32 h-auto"
                src={require("../assets/img/satelite.png")}
            ></img>
            <div className="w-full min-h-screen font-sans text-gray-900 bg-gradient-to-br from-transparent to-green-100">
                <nav className="flex justify-between items-center py-8 px-6 mx-auto max-w-screen-xl md:px-12 lg:px-16 xl:px-24">
                    <a
                        href="#"
                        className="text-3xl md:text-4xl font-bold tracking-wide"
                    >
                        <img
                            className="w-32"
                            src={require("../assets/img/logo.png")}
                        />
                    </a>
                    <div className={getMenuClasses()}>
                        <ul
                            onClick={() => setMenuState(false)}
                            className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 lg:md:-x-8"
                        >
                            <li className="text-lg md:text-base lg:text-lg font-medium group text-primary">
                                <AnchorLink href="#home">Home</AnchorLink>
                                <div className="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out" />
                            </li>
                            <li className="text-lg md:text-base lg:text-lg font-medium group">
                                <AnchorLink href="#about">About</AnchorLink>
                                <div className="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out" />
                            </li>
                            <li className="text-lg md:text-base lg:text-lg font-medium group">
                                <AnchorLink href="#team">Team</AnchorLink>
                                <div className="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out" />
                            </li>

                            <li className="text-lg md:text-base lg:text-lg font-medium group">
                                <AnchorLink href="#contact">Contact</AnchorLink>
                                <div className="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out" />
                            </li>
                        </ul>
                    </div>
                    <button
                        onClick={() => setMenuState(true)}
                        className="block md:hidden relative z-30"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 fill-current text-gray-900"
                        >
                            <rect x={4} y={6} width={7} height={2} rx={1} />
                            <rect x={13} y={16} width={7} height={2} rx={1} />
                            <rect x={4} y={11} width={16} height={2} rx={1} />
                        </svg>
                    </button>
                </nav>
                <div className="flex flex-wrap-reverse gap-y-24 justify-between py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24">
                    <div className="relative z-10 md:w-1/2 w-full">
                        <h1 className="pt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight whitespace-nowrap text-primary">
                            Project Raptor <br />
                        </h1>
                        <h1 className="pt-4 text-2xl sm:text-5xl lg:text-5xl font-bold tracking-tighter leading-tight whitespace-nowrap">
                            Redefining rocketry
                        </h1>
                        <p className="pt-8 sm:text-lg max-w-md font-normal text-gray-600 leading-relaxed">
                            The team Raptor is excited to announce the official
                            launch of Project Raptor. Our team is working
                            tirelessly to develop a reusable model rocket that
                            will not only launch, but also land at the launch
                            point and pave the way for a sustainable future in
                            the field of model rocketry.
                        </p>
                    </div>
                    <div className="relative md:w-1/2 w-full flex flex-col justify-between">
                        <div>
                            <img
                                className="rocket w-96 lg:w-full drop-shadow-2xl self-center lg:self-end"
                                src={require("../assets/img/rocket_new.png")}
                                alt=""
                            />
                            <span className="flame  left-[0px]  top-[200px] lg:left-[20px]  lg:top-[300px]   lg:absolute" />
                        </div>
                        <img
                            className="absolute top-0 left-0 w-32 h-auto"
                            src={require("../assets/img/planet1.png")}
                            alt=""
                        />
                        <img
                            className="absolute right-0 bottom-0   w-32 h-auto"
                            src={require("../assets/img/planet2.png")}
                            alt=""
                        />
                    </div>
                </div>

                <About />
                <Team />
                <Footer />
                <AnchorLink
                    href="#home"
                    className="fixed p-3 bg-primary text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5"
                    id="btn-back-to-top"
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        className="w-4 h-4"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="currentColor"
                            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
                        ></path>
                    </svg>
                </AnchorLink>
            </div>
        </div>
    );
};

export default Home;
