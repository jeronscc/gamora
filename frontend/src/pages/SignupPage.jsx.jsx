import { useState } from "react";
import Squares from "../components/Squares.jsx";

export default function SignupPage() {
  const [form, setForm] = useState({
    displayName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Parent Container */}
      <div className="flex w-4/5 max-w-5xl h-[600px] shadow-2xl rounded-md overflow-hidden">
        {/* Left Section */}
        <div className="relative w-1/2 bg-black text-white flex flex-col items-center justify-center p-10 overflow-hidden">
          {/* Fullscreen Squares background */}
          <div className="absolute inset-0">
            <Squares
              speed={0.5}
              squareSize={40}
              direction="diagonal" // up, down, left, right, diagonal
              borderColor="#14532d"
              hoverFillColor="#22c55e"
            />
          </div>

          {/* Content (above background) */}
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome, <span className="text-green-500">Gamers!</span>
            </h1>
            <p className="text-gray-400 mb-8">
              Play your day like an adventure.
            </p>
            <button className="bg-white text-black rounded-full px-6 py-2 font-semibold shadow">
              Start now
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex flex-col items-center justify-center p-10 bg-white">
          <h2 className="text-2xl font-bold mb-6">SIGN UP</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 w-full max-w-sm"
          >
            <input
              type="text"
              name="displayName"
              placeholder="Enter your display name"
              value={form.displayName}
              onChange={handleChange}
              className="border rounded-full px-4 py-2 focus:outline-none focus:ring"
            />
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={form.username}
              onChange={handleChange}
              className="border rounded-full px-4 py-2 focus:outline-none focus:ring"
            />
            <div className="flex space-x-2">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="border rounded-full px-4 py-2 w-1/2 focus:outline-none focus:ring"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="border rounded-full px-4 py-2 w-1/2 focus:outline-none focus:ring"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800"
            >
              Create Account
            </button>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <span className="flex-grow border-t"></span>
              <span>Or</span>
              <span className="flex-grow border-t"></span>
            </div>
            <button
              type="button"
              className="bg-gray-200 py-2 rounded-md font-semibold hover:bg-gray-300"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
