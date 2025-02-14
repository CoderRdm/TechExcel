import React, { useState } from "react";

const CreateTemplateForm = () => {
  const [formData, setFormData] = useState({
    about: "",
    header: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    experiences: [
      {
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    educations: [
      {
        degree: "",
        institution: "",
        startDate: "",
        endDate: "",
      },
    ],
    skills: [{ name: "" }],
  });

  const handleChange = (e, section, index) => {
    const { name, value } = e.target;
    if (section) {
      const updatedSection = [...formData[section]];
      updatedSection[index][name] = value;
      setFormData({ ...formData, [section]: updatedSection });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/templates/createtemplate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create template");
      }

      const data = await response.json();
      alert("Template created successfully!");
      console.log("Template Data:", data);
    } catch (error) {
      console.error("Error:", error.message || error);
      alert("An error occurred: " + error.message);
    }
  };

  return (
    <div>
      <h1>Create Resume Template</h1>
      <form onSubmit={handleSubmit}>
        {/* Add form fields for about, header, experiences, educations, and skills */}
        <button type="submit">Create Template</button>
      </form>
    </div>
  );
};

export default CreateTemplateForm;