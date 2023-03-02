import React from "react";
import TabSection from "./tabSection";
import TeamSection from "./Teamsection";
import { coreTeam } from "./memberData";

const Team = () => {
    return (
        <div id="team" className="max-w-screen-xl mx-auto">
            <TeamSection teamData={coreTeam} />
            <TabSection />
        </div>
    );
};

export default Team;
