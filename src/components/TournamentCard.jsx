// TournamentCard.js
import StatusBadge from "./StatusBadge";

function TournamentCard({
  title,
  status,
  participants,
  date,
  location,
  sportType,
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{title}</h2>
        <StatusBadge status={status} />
      </div>
      <p className="text-gray-600">
        {sportType} - {date}
      </p>
      <p className="text-gray-500">{location}</p>
      <p className="mt-4">{participants} Participants</p>
    </div>
  );
}

export default TournamentCard;
