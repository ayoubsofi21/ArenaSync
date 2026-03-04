// Footer.js
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-purple-700 text-white p-4 fixed bottom-0 left-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg">
          Home
        </Link>
        <Link to="/tournament" className="text-lg">
          Tournament
        </Link>
        <Link to="/profile" className="text-lg">
          Profile
        </Link>
      </div>
    </div>
  );
}

export default Footer;
