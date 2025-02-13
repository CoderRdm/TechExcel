import { useEffect, useState } from "react";

const Dashboard = () => {
  const [templates, setTemplates] = useState([]);
  const token = localStorage.getItem("token"); // Retrieve stored token

  useEffect(() => {
    fetch("http://localhost:3000/api/templates", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Send JWT token
      },
    })
      .then((res) => res.json())
      .then((data) => setTemplates(data))
      .catch((err) => console.error("Error fetching templates:", err));
  }, [token]);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {templates.map((template) => (
          <li key={template.id}>{template.about}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
