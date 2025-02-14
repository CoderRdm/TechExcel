import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Templates = () => {
    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [about, setAbout] = useState("");
    const navigate = useNavigate();

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token || !userId) {
            navigate("/login");
            return;
        }

        const fetchTemplates = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/templates/user/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` } // Add Bearer prefix
                });
                setTemplates(response.data);
            } catch (err) {
                setError("Failed to fetch templates. Please try again later.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchTemplates();
    }, [userId, token, navigate]);

    const handleCreateTemplate = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:3000/api/templates/createtemplate",
                { about },
                { headers: { Authorization: `Bearer ${token}` } } // Add Bearer prefix
            );

            if (response.status === 201) {
                setTemplates([...templates, response.data]);
                setAbout("");
                setError(null); // Clear any previous errors
            }
        } catch (err) {
            setError("Failed to create template. Please try again.");
            console.error("Error creating template", err);
        }
    };

    const handleDeleteTemplate = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this template?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://localhost:3000/api/templates/deletetemplate/${id}`, {
                headers: { Authorization: `Bearer ${token}` }, // Add Bearer prefix
            });
            setTemplates(templates.filter((t) => t.id !== id));
            setError(null); // Clear any previous errors
        } catch (err) {
            setError("Failed to delete template. Please try again.");
            console.error("Error deleting template", err);
        }
    };

    if (loading) return <p>Loading templates...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h2>User Templates</h2>

            {/* Create Template Form */}
            <form onSubmit={handleCreateTemplate} style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Enter template description"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    required
                    style={{ padding: "8px", marginRight: "10px", width: "300px" }}
                />
                <button type="submit" style={{ padding: "8px 12px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px" }}>
                    Create Template
                </button>
            </form>

            {/* Templates List */}
            <ul style={{ listStyle: "none", padding: "0" }}>
                {templates.map((template) => (
                    <li key={template.id} style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ddd", borderRadius: "4px" }}>
                        <strong>Template ID:</strong> {template.id} <br />
                        <strong>About:</strong> {template.about} <br />
                        <button
                            onClick={() => handleDeleteTemplate(template.id)}
                            style={{ padding: "6px 10px", backgroundColor: "#dc3545", color: "#fff", border: "none", borderRadius: "4px", marginTop: "10px" }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Templates;