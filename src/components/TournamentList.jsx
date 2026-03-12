import React from "react";
import TournamentCard from "./TournamentCard";
import { tournamentData } from "../data/tournamentDB";
function TournamentList({ search }) {
  const filteredTournaments = tournamentData.filter((tournament) =>
    tournament.title.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
      {filteredTournaments.map((tournament) => (
        <TournamentCard key={tournament.id} tournament={tournament} />
      ))}
    </div>
  );
}

export default TournamentList;
