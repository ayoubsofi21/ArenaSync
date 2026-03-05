import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2">
      <nav className="max-w-md w-full bg-white rounded-full shadow-md px-2 py-1 flex items-center justify-around">
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500 text-white shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 3l9 8h-3v9h-4v-6H10v6H6v-9H3l9-8z" />
          </svg>
          <span className="font-medium">Home</span>
        </Link>

        <Link
          to="/tournament"
          className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7 2v2H5a2 2 0 00-2 2v3a5 5 0 005 5h1v2H7v2h10v-2h-2v-2h1a5 5 0 005-5V6a2 2 0 00-2-2h-2V2H7zm-2 4h14v3a3 3 0 01-3 3H8a3 3 0 01-3-3V6z" />
          </svg>
          <span className="font-medium">Tournament</span>
        </Link>

        <Link
          to="/profile"
          className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
          </svg>
          <span className="font-medium">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
