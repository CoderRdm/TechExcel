import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./auth-pages"; // Ensure this exports LoginPage correctly
import SignUpPage from "./auth-pages"; // Ensure this exports SignUpPage correctly
import CreateTemplateForm from "./CreateTemplateForm"; // Import the CreateTemplateForm component
import ProtectedRoute from "./ProtectedRoute";

// Assuming you have a TemplatePage component
import TemplatePage from "./TemplatePage"; // Import the TemplatePage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/template-page"
          element={
            <ProtectedRoute>
              <TemplatePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-template"
          element={
            <ProtectedRoute>
              <CreateTemplateForm />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<LoginPage />} /> {/* Default route */}
      </Routes>
    </Router>
  );
};

export default App;