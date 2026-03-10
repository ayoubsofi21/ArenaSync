import { useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import {Link} from "react-router-dom"
const sports = [
  { name: "Basketball", icon: "🏀" },
  { name: "Horse Riding", icon: "🐎" },
  { name: "Volleyball", icon: "🏐" },
  { name: "Tennis", icon: "🎾" },
  { name: "Boxing", icon: "🥊" },
  { name: "Swimming", icon: "🏊‍♂️" },
  { name: "Football", icon: "⚽" },
];

function CreateTournamentForm() {
  const [formData, setFormData] = useState({
    sport: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSportSelect = (sportName) => {
    setFormData((prev) => ({ ...prev, sport: sportName }));
  };

  const isFormValid = formData.sport && formData.title && formData.description;

  const handleNext = (e) => {
    e.preventDefault();
    console.log("Tournament data:", formData);
    // Here you can go to next step (Step 2/4)
  };

  return (
    <form
      onSubmit={handleNext}
      className="max-w-md mx-auto bg-white p-6 rounded-xl shadow space-y-6"
    >
      <p className="flex justify-between items-center">
        <Link to="/">
          <ChevronLeftIcon className="w-6 h-6 text-gray-600 cursor-pointer" />
        </Link>
        <h2 className="text-xl font-bold">Create Tournament</h2>
      </p>
      <p className="text-gray-500">Step 1 of 4 - Basic Information</p>

      {/* Select Sport */}
      <div>
        <p className="font-medium mb-2">Select Sport</p>
        <div className="grid grid-cols-3 gap-2">
          {sports.map((sport) => (
            <button
              key={sport.name}
              type="button"
              onClick={() => handleSportSelect(sport.name)}
              className={`flex flex-col items-center p-3 border rounded-lg ${
                formData.sport === sport.name
                  ? "border-blue-600 bg-blue-100"
                  : "border-gray-300"
              }`}
            >
              <span className="text-2xl">{sport.icon}</span>
              <span className="text-sm mt-1">{sport.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tournament Title */}
      <div>
        <label className="block font-medium mb-1">Tournament Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Ring Masters League"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block font-medium mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded p-2"
          rows={4}
          placeholder="A dynamic boxing competition bringing together passionate fighters and enthusiastic fans."
        />
      </div>

      {/* Next Button */}
      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full py-2 rounded text-white ${
          isFormValid
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Next
      </button>
    </form>
  );
}

export default CreateTournamentForm;
