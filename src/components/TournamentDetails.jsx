// TournamentDetails.js
import { useParams } from "react-router-dom";
import { tournamentData } from "../data/tournamentDB"; // Import data
import ParticipantRow from "./ParticipantRow";
import StatusBadge from "./StatusBadge";

function TournamentDetails() {
  const { id } = useParams();
  const tournament = tournamentData.find((t) => t.id === id);

  if (!tournament) {
    return <div>Tournament not found!</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold">{tournament.title}</h2>
      <p>
        {tournament.sport} | {tournament.date} | {tournament.location}
      </p>
      <StatusBadge status={tournament.status} />
      <p>{tournament.description}</p>

      <div className="mt-6">
        <h3 className="text-xl">Participants</h3>
        {tournament.participants.length > 0 ? (
          tournament.participants.map((p) => (
            <ParticipantRow
              key={p.id}
              name={p.name}
              status={p.status}
              avatar={p.avatar}
            />
          ))
        ) : (
          <p>No participants yet</p>
        )}
      </div>
    </div>
  );
}

export default TournamentDetails;
