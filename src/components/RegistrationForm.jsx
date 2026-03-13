import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { tournamentData } from "../data/tournamentDB";

function ParticipantForm() {
  const { id } = useParams();

  const [tournaments, setTournaments] = useState(() => {
    const stored = localStorage.getItem("tournamentData");
    return stored ? JSON.parse(stored) : tournamentData;
  });

  const tournament = tournaments.find((t) => t.id === id);

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [status, setStatus] = useState("Confirmed");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newParticipant = {
      id: Date.now().toString(),
      name,
      avatar,
      status,
    };

    const updatedTournaments = tournaments.map((t) => {
      if (t.id === id) {
        return {
          ...t,
          participants: [...t.participants, newParticipant],
        };
      }
      return t;
    });

    setTournaments(updatedTournaments);
    localStorage.setItem("tournamentData", JSON.stringify(updatedTournaments));

    setName("");
    setAvatar("");
    setStatus("Confirmed");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-xl shadow mb-6 space-y-3"
      >
        <h2 className="text-lg font-bold">Add Participant</h2>

        <input
          type="text"
          placeholder="Participant Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Avatar URL"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option>Confirmed</option>
          <option>Pending</option>
        </select>

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Add Participant
        </button>
      </form>

      <Link
        to={`/tournament/${id}`}
        state={{ participants: tournament?.participants }}
        className="text-blue-600 font-medium hover:underline"
      >
        View Participants
      </Link>
    </div>
  );
}

export default ParticipantForm;
