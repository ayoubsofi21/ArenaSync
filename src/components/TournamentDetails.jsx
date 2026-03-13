import { useParams, Link } from "react-router-dom";
import { tournamentData } from "../data/tournamentDB";
import ParticipantRow from "./ParticipantRow";
import StatusBadge from "./StatusBadge";
import { useState, useEffect } from "react";
// import GVCF from "../assets/image.png";

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      <p className="text-gray-600 text-lg font-medium animate-pulse">
        Loading...
      </p>
    </div>
  );
}
function TournamentDetails() {
  const { id } = useParams();

  // const tournament = tournamentData.find((t) => t.id === id);

  // if (!tournament) {
  //   return <p className="text-center mt-6">Tournament not found</p>;
  // }
  const [tournament, setTournament] = useState(null);
  const [loading, setLoading] = useState(true);
  const clearParticipants = () => {
    const stored = localStorage.getItem("tournamentData");
    const tournaments = stored ? JSON.parse(stored) : tournamentData;

    const updatedTournaments = tournaments.map((t) =>
      t.id === id ? { ...t, participants: [] } : t,
    );

    localStorage.setItem("tournamentData", JSON.stringify(updatedTournaments));
    setTournament((prev) => ({ ...prev, participants: [] })); // update UI
  };
  useEffect(() => {
    setTimeout(() => {
      // const data = tournamentData.find((t) => t.id === id);
      const stored = localStorage.getItem("tournamentData");
      const tournaments = stored ? JSON.parse(stored) : tournamentData;
      const data = tournaments.find((t) => t.id === id);
      setTournament(data);
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!tournament) {
    return <p className="text-center mt-6">Tournament not found</p>;
  }

  return (
    <>
      <Link to="/">
        <button className="p-4 sm:p-6 bg-blue" aria-label="Go back">
          <i className="fas fa-arrow-left text-black text-lg"></i>
        </button>
      </Link>
      <div className="container mx-auto p-6">
        <h4 className="text-2xl font-bold flex w-full gap-3">
          {tournament.participants.length > 0 ? (
            <>
              <img
                src={
                  tournament.participants[0].avatar ||
                  "https://i.pravatar.cc/150?u=u4"
                }
                alt={tournament.title}
                className="w-12 h-12 rounded-md object-cover"
              />
              {tournament.title}
            </>
          ) : (
            <>
              <img
                src="https://i.pravatar.cc/150?u=u4"
                alt={tournament.title}
                className="w-12 h-12 rounded-md object-cover"
              />
              {tournament.title}
            </>
          )}
        </h4>
        <p className="text-gray-600">
          {tournament.sport} | {tournament.date} | {tournament.location}
        </p>
        <StatusBadge statusdata={tournament.status} />
        <p className="mt-4">{tournament.description}</p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Participants</h3>
          {tournament.participants && tournament.participants.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-4">
              {tournament.participants.map((p) => (
                <ParticipantRow
                  key={p.id}
                  name={p.name}
                  status={p.status}
                  avatar={p.avatar}
                />
              ))}
            </div>
          ) : (
            <p>No participants yet</p>
          )}
        </div>
        <button
          hidden
          onClick={clearParticipants}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Clear All Participants
        </button>
      </div>
    </>
  );
}

export default TournamentDetails;
