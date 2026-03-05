export default function ParticipantRow({ name, status, avatar }) {
  return (
    <div className="flex items-center gap-3 mt-2">
      <img
        src={avatar}
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">{status}</p>
      </div>
    </div>
  );
}
