import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserCard from "./components/useCard/UserCard";
import UserProfile from "./components/useProfile/UserProfile";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <div className="bg-secondary pt-0 w-100 min-vh-100">
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<UserCard />} />
            <Route path="/user" element={<UserProfile />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
