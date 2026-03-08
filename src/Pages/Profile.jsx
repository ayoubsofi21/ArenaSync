import React from "react";
import profileImg from "../assets/image.png";
export default function ProfileCard() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
      <div className="flex justify-center">
        <img
          src={profileImg}
          alt="Ayoub Sofi"
          className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
        />
      </div>

      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold text-gray-800">Ayoub Sofi</h2>
        <p className="text-gray-500 text-sm">Frontend Developer</p>
      </div>

      <div className="flex justify-around mt-6 border-t border-b border-gray-100 py-4">
        <div className="text-center">
          <p className="text-gray-800 font-semibold">180</p>
          <p className="text-gray-400 text-sm">Followers</p>
        </div>
        <div className="text-center">
          <p className="text-gray-800 font-semibold">230</p>
          <p className="text-gray-400 text-sm">Posts</p>
        </div>
        <div className="text-center">
          <p className="text-gray-800 font-semibold">89</p>
          <p className="text-gray-400 text-sm">Following</p>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Follow
        </button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
          Message
        </button>
      </div>
    </div>
  );
}
