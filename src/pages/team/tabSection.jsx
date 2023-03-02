import React, { useState } from "react";
import { componentTeams } from "./memberData";
import TeamSection from "./Teamsection";

const TabSection = () => {
    let [teamData, setTeamData] = useState(componentTeams.tvc);

    const handleSelect = (key) => {
        setTeamData(componentTeams[key]);
    };

    const getBtnClasses = (title) => {
        let classList =
            "inline-block m-1 w-full p-4 text-sm font-medium text-center rounded-lg cursor-pointer hover:bg-primary hover:text-white shadow-xl backdrop-blur-xl   transition-all duration-300 ";
        classList +=
            teamData.title == title
                ? "bg-primary text-white"
                : "bg-white/40 text-gray-900";
        return classList;
    };

    return (
        <div id="team">
            <div className="sm:hidden">
                <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-[90%] mx-auto p-2.5 backdrop-blur-xl"
                    onChange={(e) => handleSelect(e.target.value)}
                >
                    {Object.keys(componentTeams).map((key) => {
                        return (
                            <option key={key} value={key}>
                                {componentTeams[key].title}
                            </option>
                        );
                    })}
                </select>
            </div>

            <ul className="hidden  sm:flex">
                {Object.keys(componentTeams).map((key) => {
                    const item = componentTeams[key];
                    return (
                        <div
                            key={key}
                            className={getBtnClasses(item.title)}
                            onClick={() => handleSelect(key)}
                        >
                            {item.title}
                        </div>
                    );
                })}
            </ul>
            <TeamSection teamData={teamData} />
        </div>
    );
};

export default TabSection;
