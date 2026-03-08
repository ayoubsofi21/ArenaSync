export default function StatusBadge({ statusdata }) {
  const colorMap = {
    "On Going": "bg-green-100 text-green-800",
    Upcoming: "bg-blue-100 text-blue-800",
    Pending: "bg-yellow-100 text-yellow-800",
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-sm font-semibold ${colorMap[statusdata]}`}
    >
      {statusdata}
    </span>
  );
}
