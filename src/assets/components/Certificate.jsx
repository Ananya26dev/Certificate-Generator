import React, { useState, useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import "./Certificate.css";
import certificateTemplate from "../certificate.png";
const Certificate = () => {
  const ref = useRef(null);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${name || "default"}-certificate.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

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
      <div className="container" ref={ref}>
        <img src={certificateTemplate} alt="certificate" height={400} />
        <div className="content">
          <h1 className="name">{name}</h1>
          <p className="course">{course}</p>
        </div>
      </div>
      <button onClick={onButtonClick}>Click Me</button>
    </div>
  );
};

export default Certificate;
