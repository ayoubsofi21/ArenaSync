import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function RegisterButton({ tournamentId }) {
  const [isRegistered, setIsRegistered] = useState(false);

  // Vérifier dans le localStorage si l'utilisateur est déjà inscrit
  useEffect(() => {
    const saved = localStorage.getItem(`registered-${tournamentId}`);
    if (saved === "true") {
      setIsRegistered(true);
    }
  }, [tournamentId]);

  // Logique du clic
  const handleClick = (e) => {
    if (isRegistered) {
      e.preventDefault(); // Empêche la navigation si on se désinscrit
    }

    const newStatus = !isRegistered;
    setIsRegistered(newStatus);

    localStorage.setItem(`registered-${tournamentId}`, newStatus);
  };

  return (
    <Link
      to={`/register/${tournamentId}`}
      onClick={handleClick}
      className={`block text-center text-white py-2 rounded-lg transition ${
        isRegistered
          ? "bg-red-600 hover:bg-red-700"
          : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {isRegistered ? "Désinscription" : "S'inscrire"}
    </Link>
  );
}

export default RegisterButton;
