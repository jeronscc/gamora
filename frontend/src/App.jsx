import { Route, Routes } from "react-router";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx"
import Try from "./pages/Try.jsx"

const App = () => {
  return <div>

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/try" element={<Try />} />
        
      </Routes>

    </div>;
  
};

export default App
