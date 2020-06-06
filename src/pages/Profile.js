import React from 'react';

const ProfilePage = () => {
  return (
    <div>
        <h1 style={{"fontFamily":"'Caveat', cursive","fontSize":"3em","color":"#4C4C49","paddingRight":"400px"}}>Welcome to Mentor Portal!</h1>
        <br />
        <br />
        <h2 style={{ color: "#4C4C49" }}>My Weekly Mentoring Session</h2>
        <h3 style={{ color: "#6AC66B" }}>Tuesdays @ 6pm MST</h3>
        <hr style={{ border: "1px solid black" }} />
        <h2 style={{ color: "#4C4C49" }}>Mentoring Resources</h2>
        <a href="https://edu.google.com/intl/en/products/classroom/?modal_active=none&zippy-set-single_activeEl=zippy-single-set-8">
          Google Classroom
        </a>
        <br />
        <a href="https://apps.google.com/meet/">Google Meets</a>
        <br />
        <a href="#.html">Session Journal Entries</a>
        <br />
        <a href="#.html">Mentee Profile</a>
        <br />
        <a href="https://360.articulate.com/review/content/73bf3afe-47f9-4f9f-aa4d-70bf27fbe8d5/review">
          Mentor Training
        </a>
        <br />
        <br />
        <hr style={{ border: "1px solid black" }} />
        <h2 style={{ color: "#4C4C49" }}>My Info</h2>
        <h5>View and edit your profile information</h5>
        <h3 style={{ color: "#FF914D" }}>Account-Related</h3>
        Name (first and last)
        <br />
        Email
        <br />
        Phone Number
        <br />
        Change Password
        <br />
        <h3 style={{ color: "#549BEA" }}>Mentor-Related</h3>
        Languages I Speak
        <br />
        My Time Zone
        <br />
        My Availability to Mentor
        <br />
        <br />
    </div>

  );
};


export default ProfilePage;