// StatusBadge.js
function StatusBadge({ status }) {
  const statusStyles = {
    "On Going": "bg-green-500 text-white",
    Upcoming: "bg-blue-500 text-white",
    Confirmed: "bg-green-500 text-white",
    Pending: "bg-orange-500 text-white",
  };

  return (
    <span className={`px-4 py-1 rounded-full ${statusStyles[status]}`}>
      {status}
    </span>
  );
}

export default StatusBadge;
