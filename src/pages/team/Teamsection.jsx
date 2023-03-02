import React from "react";
import Member from "./TeamMember";

const TeamSection = ({ teamData }) => {
    return (
        <div className="px-4 mx-auto text-center lg:py-16 lg:px-6 py-8">
            <div className="mx-auto mb-8 lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    {teamData.title} Team
                </h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                    {teamData.description}
                </p>
            </div>
            <div className="gap-12 grid md:flex flex-wrap justify-center">
                {teamData.members.map((item) => {
                    return <Member key={item.id} item={item} />;
                })}
            </div>
        </div>
    );
};

export default TeamSection;
