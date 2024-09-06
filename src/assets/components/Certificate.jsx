import React, { useState } from "react";
import "./Certificate.css";
import certificateTemplate from "../certificate.png";
const Certificate = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="name">Name:</label>&nbsp;
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="course">Course:</label>&nbsp;
        <input
          type="text"
          id="course"
          placeholder="Enter Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
      </div>
      <div className="container">
        <img src={certificateTemplate} alt="certificate" height={400} />
        <div className="content">
          <h1 className="name">{name}</h1>
          <p className="course">{course}</p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
