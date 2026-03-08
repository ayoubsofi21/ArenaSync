import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";

export default function ParticipantRow({ name, status, avatar }) {
  const isConfirmed = status === "Confirmed";

  return (
    <div
      className={`flex flex-col items-start gap-1 p-4 rounded-2xl lg:flex-row lg:justify-between lg:items-center
      ${isConfirmed ? "bg-green-100" : "bg-orange-100"}`}
    >
      <div className="flex gap-4 lg:items-center">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <p className="font-semibold text-gray-800">{name}</p>
      </div>

      <div className="flex items-start gap-1 ">
        {isConfirmed ? (
          <CheckCircleIcon className="w-4 h-4 text-green-600" />
        ) : (
          <ClockIcon className="w-4 h-4 text-orange-500" />
        )}

        <span
          className={`text-sm font-medium ${
            isConfirmed ? "text-green-600" : "text-orange-500"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
