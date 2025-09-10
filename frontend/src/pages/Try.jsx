import { useState } from "react";

export default function Counter () {
  const [name, setName] = useState(""); // input starts empty

  const handleChange = (e) => {
    setName(e.target.value); // update state on each keystroke
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Your name is: {name}</p>
    </div>
  );
}