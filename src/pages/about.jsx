import React from "react";

const About = () => {
    return (
        <section id="about" className="dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-lg lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        What's Project Raptor?
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-5">
                        <img src={require("../assets/img/teamwork.png")} />
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            The Marvel Crew innovation and Entrepreneurship Club
                            is excited to announce the official launch of
                            Project Raptor. Our team is working tirelessly to
                            develop a reusable model rocket that will not only
                            launch, but also land at the launch point and pave
                            the way for a sustainable future in the field of
                            model rocketry. We invite you to join us as we
                            ignite our engines and embark on this innovative
                            journey. Follow us on social media for updates on
                            our progress and exclusive behind-the-scenes content
                            of our team's work. Don't miss out on this historic
                            moment!
                            <div className="mt-8" />
                            Project Raptor is a thrilling model rocket project
                            that seeks to create a model rocket from scratch and
                            launch it into the sky. It is an exciting
                            undertaking that involves the design, construction,
                            and launch of a high-powered rocket, with the goal
                            of achieving optimal performance and maximizing
                            altitude. The project involves a diverse range of
                            skills and expertise, from engineering and physics
                            to design and aesthetics. Project Raptor promises to
                            be a thrilling adventure that will test the limits
                            of creativity and innovation, and offer a unique
                            opportunity to experience the excitement and wonder
                            of rocketry.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-5 mt-8">
                        <p className="order-2 lg:order-1 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            Our team is made up of individuals from various
                            disciplines, including mechanical design,
                            simulations, flight computations and data analysis,
                            and avionics. Our project is divided into several
                            teams, each with a specific focus. The thrust
                            controlling team is responsible for designing and
                            building the rocket's propulsion system, while the
                            thrust vector controlling team ensures that the
                            rocket can adjust its trajectory during flight. The
                            body and assembling team is responsible for
                            constructing the rocket's body, while the launching
                            and navigation team handles the launch and flight
                            control. The safety and recovering team is in charge
                            of ensuring the safety of everyone involved in the
                            project, and the marketing team helps to promote the
                            project and its achievements.
                            <div className="mt-8" />
                            Throughout the project, we rely on mechanical design
                            tools and simulations to optimize the rocket's
                            performance. Flight computations and data analysis
                            are crucial in determining the rocket's flight path
                            and ensuring that it reaches its intended
                            destination. Avionics, including onboard sensors and
                            communication systems, are also critical to the
                            success of the project. We are excited to be working
                            together on this challenging and rewarding project.
                            Our goal is to not only develop and launch a model
                            rocket, but to also inspire and educate others about
                            the possibilities of rocketry and STEM fields. Stay
                            tuned for updates on our progress and achievements!
                        </p>
                        <img
                            className="order-1 lg:order-2"
                            src={require("../assets/img/teamwork2.png")}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
