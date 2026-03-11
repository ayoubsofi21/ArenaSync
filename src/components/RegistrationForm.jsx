import { useState } from "react";
// import ParticipantCard from "./ParticipantRow";
import { useParams } from "react-router-dom";
import { tournamentData } from "../data/tournamentDB";

function ParticipantForm() {
  //   const [participants, setParticipants] = useState([]);
  const { id } = useParams();
  const tournament = tournamentData.find((t) => t.id === id);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // setParticipants((prev) => [...prev, formData]);

    // setFormData({
    //   name: "",
    //   avatar: "",
    //   status: "Confirmed",
    // });

    const newParticipant = {
      id: Date.now().toString(),
      name: formData.name,
      avatar: formData.avatar,
      status: formData.status,
    };

    tournament.participants.push(newParticipant);
    // 2. Enregistrer tout le tournoi dans localStorage
    // localStorage.setItem("tournamentData", JSON.stringify(tournamentData));

    // console.log(tournament.participants);
  };

  return (
    <div className="max-w-md mx-auto">
      {/* FORM */}
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

      {/* {participants.map((p, index) => (
        <ParticipantCard
          key={index}
          name={p.name}
          avatar={p.avatar}
          status={p.status}
        />
      ))} */}
    </div>
  );
}

export default ParticipantForm;
