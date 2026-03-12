import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";
// import { tournamentData } from "../data/tournamentDB";
import {
  CalendarIcon,
  UserGroupIcon,
  MapPinIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

function TournamentCard({ tournament }) {
  return (
    <>
      {/* {tournamentData.map((tournament) => ( */}
      <div
        key={tournament.id}
        className="bg-white rounded-xl shadow-md overflow-hidden p-6 space-y-4 hover:shadow-lg transition-shadow duration-200"
      >
        <Link
          key={tournament.id}
          to={`/tournament/${tournament.id}`}
          className="block space-y-4"
        >
          {/* Header */}
          <div className="flex items-center gap-4">
            {tournament.participants?.length > 0 && (
              <img
                src={tournament.participants[0].avatar}
                alt={tournament.title}
                className="w-10 h-10 rounded-md object-cover"
              />
            )}
            <div>
              <h2 className="text-lg font-bold">{tournament.title}</h2>
              <StatusBadge status={tournament.status} />
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm">{tournament.description}</p>

          <hr className="border-gray-200" />

          <div className="space-y-2 text-gray-700 text-sm">
            <div className="flex items-center gap-2">
              <UserGroupIcon className="w-5 h-5 text-gray-500" />
              <span>
                {tournament.participantsCount}/{tournament.maxParticipants}{" "}
                Participants • {tournament.type}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <TrophyIcon className="w-5 h-5 text-gray-500" />
              <span>{tournament.format}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-gray-500" />
              <span>{tournament.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-5 h-5 text-gray-500" />
              <span>{tournament.location}</span>
            </div>
          </div>
        </Link>
        <Link
          to={`/register/${tournament.id}`}
          className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          S'inscrire
        </Link>
      </div>
      {/* ))} */}
    </>
  );
}

export default TournamentCard;
