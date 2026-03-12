import { useState } from "react";
// import ParticipantCard from "./ParticipantRow";
import { useParams } from "react-router-dom";
import { tournamentData } from "../data/tournamentDB";
import { Link } from "react-router-dom";

function ParticipantForm() {
  //   const [participants, setParticipants] = useState([]);
  const { id } = useParams();

  // 2. Enregistrer tout le tournoi dans localStorage
  const [tournaments, setTournaments] = useState(() => {
    const stored = localStorage.getItem("tournamentData");
    return stored ? JSON.parse(stored) : tournamentData;
  });
  const tournament = tournaments.find((t) => t.id === id);
  console.log(tournament);
  const [formData, setFormData] = useState({
    name: "",
    avatar: "",
    status: "Confirmed",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //   const handleSubmit = (e) => {

  //     e.preventDefault();

  //     setParticipants((prev) => [...prev, formData]);

  //     setFormData({
  //       name: "",
  //       avatar: "",
  //       status: "Confirmed",
  //     });

  //     const newParticipant = {
  //       id: Date.now().toString(),
  //       name: formData.name,
  //       avatar: formData.avatar,
  //       status: formData.status,
  //     };

  //     tournament.participants.push(newParticipant);

  //     console.log(tournament.participants);
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newParticipant = {
      id: Date.now().toString(),
      name: formData.name,
      avatar: formData.avatar,
      status: formData.status,
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

    setFormData({
      name: "",
      avatar: "",
      status: "Confirmed",
    });
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
          name="name"
          placeholder="Participant Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="avatar"
          placeholder="Avatar URL"
          value={formData.avatar}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option>Confirmed</option>
          <option>Pending</option>
        </select>

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Add Participant
        </button>
      </form>

      {/* {tournament?.participants.map((p) => (
        <ParticipantCard
          key={p.id}
          name={p.name}
          avatar={p.avatar}
          status={p.status}
        />
      ))} */}
      <Link
        to={`/tournament/${id}`}
        state={{ participants: tournament?.participants }}
        className="text-blue-600 font-medium hover:underline"
      >
        {" "}
        View Participants
      </Link>
    </div>
  );
}

export default ParticipantForm;
