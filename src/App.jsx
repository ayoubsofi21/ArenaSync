// App.js
import React from "react";
import TournamentCard from "./components/TournamentCard"; // Import component
import { tournamentData } from "./data/tournamentDB"; // Import data
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Good Morning, Samuel Walker!</h1>
      <input
        type="search"
        placeholder="Search"
        className="px-4 py-2 border border-gray-300 rounded-lg w-full mb-6"
      />
      {tournamentData.map((tournament) => (
        <TournamentCard key={tournament.id} tournament={tournament} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
