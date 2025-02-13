import { useState, useEffect } from "react";
import axios from "axios";

const Education = ({ userId }) => {
    const [education, setEducation] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEducation = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/education/user/${userId}`);
                setEducation(response.data);
            } catch (err) {
                setError("Error fetching education data");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchEducation();
    }, [userId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Education</h2>
            <ul>
                {education.map((edu) => (
                    <li key={edu.id}>
                        <strong>Institute:</strong> {edu.institute} <br />
                        <strong>Degree:</strong> {edu.degree} in {edu.field} <br />
                        <strong>Graduation Year:</strong> {edu.graduationyear}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Education;
