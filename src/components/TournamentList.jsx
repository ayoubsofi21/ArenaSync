import React from "react";
import TournamentCard from "./TournamentCard";
import { tournamentData } from "../data/tournamentDB";
function TournamentList() {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
      {tournamentData.map((tournament) => (
        <TournamentCard tournament={tournament} />
      ))}
    </div>
  );
}

export default TournamentList;
