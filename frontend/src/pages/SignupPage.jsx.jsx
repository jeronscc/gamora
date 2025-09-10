import { useState } from "react";
import { useNavigate } from "react-router";
import Squares from "../components/Squares.jsx";
import LandingSpeedDial from "../components/LandingSpeedDial.jsx";

export default function SignupPage() {
  const [form, setForm] = useState({
    displayName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    let valid = true;
    let newErrors = { password: "", confirmPassword: "" };

    // pass word req validator
    if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      valid = false;
    }

    // pass and confirm pass should match
    if (form.confirmPassword !== "" && form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Password do not match";
      valid = false;
    }


    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted:", form);
    }

    console.log("Not yet complete:",form) 
  };

  return (
    // Background
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      {/*FAB*/}
      <LandingSpeedDial />

      {/* Parent Container */}
      <div className="flex w-4/5 max-w-5xl h-[600px] shadow-2xl rounded-md overflow-hidden bg-base-100">
        {/* Left Section */}
        <div className="relative w-1/2 bg-neutral text-neutral-content flex flex-col items-center justify-center p-10 overflow-hidden">
          {/* Square component as background */}
          <div className="absolute inset-0 bg-white/10 z-10">
            {/* Squares component */}
            <Squares
              speed={0.5}
              squareSize={40}
              direction="diagonal"
              borderColor="#14532d"
              hoverFillColor="#22c55e"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <img
              src="/gamora_logo.png"
              alt="Gamora Logo"
              className="w-20 h-20 mb-4"
            />
            <h1 className="text-4xl font-bold mb-4">
              Welcome, <span className="text-primary">Gamers!</span>
            </h1>
            <p className="text-gray-400 mb-8">
              Play your day like an adventure.
            </p>
            <button className="btn btn-outline btn-primary rounded-full">
              Start now
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex flex-col items-center justify-center p-10">
          <h2 className="text-2xl font-bold mb-6">SIGN UP</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 w-full max-w-sm"
          >
            <input
              type="text"
              name="displayName"
              required
              placeholder="Enter your display name"
              value={form.displayName}
              onChange={handleChange}
              className="input input-bordered w-full rounded-full"
            />
            <input
              type="text"
              name="username"
              required
              placeholder="Enter your username"
              value={form.username}
              onChange={handleChange}
              className="input input-bordered w-full rounded-full"
            />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="input input-bordered w-full rounded-full"
              />
              {errors.password && (
                <p className="text-sm text-error mt-1">{errors.password}</p>
              )}
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm"
                value={form.confirmPassword}
                onChange={handleChange}
                className="input input-bordered w-full rounded-full"
              />
              {errors.confirmPassword && (<p className="text-sm text-error mt-1">{errors.confirmPassword}</p>
              )}

            <button type="submit" className="btn btn-primary w-full">
              Create Account
            </button>

            <div className="divider text-gray-400">Or</div>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="btn btn-outline w-full"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
