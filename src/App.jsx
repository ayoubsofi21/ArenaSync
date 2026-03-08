// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TournamentCard from "./components/TournamentCard";
import Footer from "./components/Footer";
import { Header } from "./components/Header.jsx";
// import Home from "./pages/Home";
import ParcipantRow from "./components/ParticipantRow";
import TournamentDetails from "./components/TournamentDetails.jsx";
import ProfileCard from "./Pages/Profile.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen relative pb-20">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <TournamentCard />
              </>
            }
          />
          <Route path="/tournament" element={<ParcipantRow />} />
          <Route path="/tournament/:id" element={<TournamentDetails />} />
          <Route path="/profile" element={<ProfileCard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
