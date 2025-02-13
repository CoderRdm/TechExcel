import { useState, useEffect } from "react";
import axios from "axios";

const Templates = ({ userId }) => {
    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/templates/user/${userId}`);
                setTemplates(response.data);
            } catch (err) {
                setError("Error fetching templates");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchTemplates();
    }, [userId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>User Templates</h2>
            <ul>
                {templates.map((template) => (
                    <li key={template.id}>
                        <strong>Template ID:</strong> {template.id} <br />
                        <strong>About:</strong> {template.about}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Templates;
