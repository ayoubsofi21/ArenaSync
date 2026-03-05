import { useParams } from "react-router-dom";
import { tournamentData } from "../data/tournamentDB"; // Import data
import ParticipantRow from "./ParticipantRow";
import StatusBadge from "./StatusBadge";

function TournamentDetails() {
  const { id } = useParams();

  // Convert id to number to match tournamentData
  const tournament = tournamentData.find((t) => t.id === id);

  if (!tournament) {
    return <p className="text-center mt-6">Tournament not found</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold">{tournament.title}</h2>
      <p className="text-gray-600">
        {tournament.sport} | {tournament.date} | {tournament.location}
      </p>
      <StatusBadge status={tournament.status} />
      <p className="mt-4">{tournament.description}</p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Participants</h3>
        {tournament.participants && tournament.participants.length > 0 ? (
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
