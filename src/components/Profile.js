import React from "react";
import "../Style.css";

const ProfilePage = () => {
  return (
    <div>
      <h2 style={{ color: "#4C4C49" }}>My Weekly Mentoring Session</h2>
      <h3 style={{ color: "#6AC66B", textIndent: "50px" }}>Tuesdays @ 6pm MST</h3>
      <br />
      <hr style={{ border: "1px dotted #4C4C49", width:"400px", marginLeft: 0 }} />

      <h2 style={{ color: "#4C4C49" }}>Mentoring Resources</h2>
      <div style={{ paddingLeft: "50px" }}>
        <a href="https://edu.google.com/intl/en/products/classroom/?modal_active=none&zippy-set-single_activeEl=zippy-single-set-8">
          Google Classroom
        </a>
        <br />
        <a href="https://apps.google.com/meet/">Google Meets</a>
        <br />
        <a href="https://360.articulate.com/review/content/73bf3afe-47f9-4f9f-aa4d-70bf27fbe8d5/review">
          Mentor Training
        </a>
      </div>
      <br />
      <hr style={{ border: "1px dotted #4C4C49", width:"400px", marginLeft: 0 }} />

      <h2 style={{ color: "#4C4C49" }}>My Info</h2>
      <h3 style={{ color: "#FF914D", paddingLeft:"25px" }}>Account-Related</h3>
      <p style={{ paddingLeft: "50px"}}>
        Name (first and last)
        <br />
        Email
        <br />
        Phone Number
        <br />
        Change Password
      </p>
      <h3 style={{ color: "#549BEA", paddingLeft:"25px" }}>Mentor-Related</h3>
      <p style={{ paddingLeft: "50px"}}>
        My Languages
        <br />
        My Time Zone
      </p>
      <br />
      <br />
    </div>
  );
};

export default ProfilePage;
