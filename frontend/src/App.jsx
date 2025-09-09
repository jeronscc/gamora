import { Route, Routes } from "react-router";
import SignupPage from "./pages/SignupPage.jsx";

const App = () => {
  return <div>

      <Routes>
        <Route path="/signup" element={<SignupPage />} />

      </Routes>

    </div>;
  
};

export default App
