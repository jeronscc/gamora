import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Squares from "../components/Squares.jsx";
import LandingSpeedDial from "../components/LandingSpeedDial.jsx";

export default function SignupPage() {

  // for form state
  const [form, setForm] = useState({
    displayName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  //for errors state
  const [errors, setErrors] = useState({
    displayName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  // for existing usernames state
  const [usernames, setUsernames] = useState([]);

  // for username availability state
  const [usernameStatus, setUsernameStatus] = useState("");

  // for success message user creation state
  const [successMessage, setSuccessMessage] = useState("");

  // fetches all users from backend and stores usernames only
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/users");
        const data = await res.json();
        setUsernames(data.map((user) => user.username)); // extract usernames only
      } catch (err) {
        console.error("Failed to fetch users:", err);
      }
    };
    fetchUsers();
  }, []);

  // navigate hook
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    // trim username input for validation
    const trimmedValue = value.trim();

    // username validator (checks while user is typing (realtime))
    if (name === "username") {

      // clear the error and status if empty
      if (!trimmedValue) {
        setErrors((prev) => ({ ...prev, username: "" }));
        setUsernameStatus("");
      } else if (usernames.includes(trimmedValue)) {
        setErrors((prev) => ({
          ...prev,
          username: "Username is already taken",
        }));
        setUsernameStatus("");
      } else {
        setErrors((prev) => ({ ...prev, username: "" }));
        setUsernameStatus("available");
      }
    }
  };

  const validate = () => {
    let valid = true;
    let newErrors = {
      displayName: "",
      username: "",
      password: "",
      confirmPassword: "",
    };

    // username validator (checks on submit and change valid to false)
    if (!form.username.trim()) {
      newErrors.username = "Username is required";
      valid = false;
    } else if (usernames.includes(form.username.trim())) {
      newErrors.username = "Username is already taken";
      valid = false;
    }

    // password req validator
    if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      valid = false;
    }

    // pass and confirm pass should match
    if (form.password.length >= 8) {
      if (
        form.confirmPassword !== "" &&
        form.password !== form.confirmPassword
      ) {
        newErrors.confirmPassword = "Password do not match";
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      console.log("Form invalid, current data: ", form);
      alert("error!")
      return;
    }

    try {
      // send POST req to backend
      const res = await fetch("http://localhost:5001/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          displayName: form.displayName,
          username: form.username,
          password: form.password,
        }),
      });

      const data = await res.json();


      if (res.ok) {
        setSuccessMessage(
          `New member! ${form.displayName} joins as player number ${data.totalUsers}!`
        );
        
        // reset setStates to empty
        setForm({
          displayName: "",
          username: "",
          password: "",
          confirmPassword: "",
        });

        setErrors({
          displayName: "",
          username: "",
          password: "",
          confirmPassword: "",
        });

        setUsernameStatus("");

        // close the success message after three secs
        setTimeout(() => setSuccessMessage(""), 10000);
      }

      console.log("User created:", data);
    } catch (error) {
      console.error("Network error: ", error);
    }
  };

  return (
    // Background
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      {/* success message for user creation */}
      {successMessage && (
        <div
          role="alert"
          className="alert alert-success fixed top-5 left-1/2 transform -translate-x-1/2 z-50 max-w-[90%] w-full md:w-auto px-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="truncate">{successMessage}</span>
        </div>
      )}

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
            {usernameStatus === "available" && !errors.username && (
              <p className="text-sm text-success mt-1">Username is available</p>
            )}
            {errors.username && (
              <p className="text-sm text-error mt-1">{errors.username}</p>
            )}
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
            {errors.confirmPassword && (
              <p className="text-sm text-error mt-1">
                {errors.confirmPassword}
              </p>
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
