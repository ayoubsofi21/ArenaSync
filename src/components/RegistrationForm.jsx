import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    team: "",
    level: "",
  });

  const [errors, setErrors] = useState({});

  const regex = {
    name: /^[A-Za-z\s]$/,
    team: /^[A-Za-z\s]$/,
  };

  const levels = ["Beginner", "Intermediate", "Advanced"];

  const validate = (name, value) => {
    let error = "";

    if (name === "name" && !regex.name.test(value)) {
      error = "Name must contain at least 3 letters";
    }

    if (name === "team" && !regex.team.test(value)) {
      error = "Team must contain at least 2 letters";
    }

    if (name === "level" && value === "") {
      error = "Please select a level";
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    validate(name, value);
  };

  const isFormValid =
    formData.name &&
    formData.team &&
    formData.level &&
    !errors.name &&
    !errors.team &&
    !errors.level;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Participant added:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-xl shadow space-y-4"
    >
      <h2 className="text-xl font-bold">Tournament Registration</h2>

      {/* Name */}
      <div>
        <label className="block font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      {/* Team */}
      <div>
        <label className="block font-medium">Team</label>
        <input
          type="text"
          name="team"
          value={formData.team}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        {errors.team && <p className="text-red-500 text-sm">{errors.team}</p>}
      </div>

      {/* Level */}
      <div>
        <label className="block font-medium">Level</label>
        <select
          name="level"
          value={formData.level}
          onChange={handleChange}
          className="w-full border rounded p-2"
        >
          <option value="">Select level</option>
          {levels.map((lvl) => (
            <option key={lvl} value={lvl}>
              {lvl}
            </option>
          ))}
        </select>

        {errors.level && <p className="text-red-500 text-sm">{errors.level}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full py-2 rounded text-white ${
          isFormValid
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
