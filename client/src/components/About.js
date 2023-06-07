import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderAboutContent = () => {
    return (
      <div>
        <p className="d-flex justify-content-between">
          <strong>User Id:</strong>
          <span className="text-primary">hbhedgc67</span>
        </p>
        <p className="d-flex justify-content-between">
          <strong>Name:</strong>
          <span className="text-primary">Vivek Panth</span>
        </p>
        <p className="d-flex justify-content-between">
          <strong>Email:</strong>
          <span className="text-primary">vivekpanth09@gmail.com</span>
        </p>
        <p className="d-flex justify-content-between">
          <strong>Profession:</strong>
          <span className="text-primary">Web Developer</span>
        </p>
      </div>
    );
  };

  const renderTimelineContent = () => {
    return (
      <div>
        <ul>
          <li>MY CV</li>
          <li>Experience</li>
          <li>My Projects</li>
          <li>Availability</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="container mt-4">
      <div className="row">
      <div className="card col-lg-8 mx-auto bg-light">
        <div className=" col-lg-12 d-flex ">
          <div className="card col-lg-4 border-0 bg-light">
            <div className="card-body">
              <img
                src="../profile1.jpg"
                alt="Profile Photo"
                className="w-100 mb-3"
              />
              <h3>Skills</h3>
              <ul>
                <li>MERN Dev</li>
                <li>Web Developer</li>
                <li>Software Engineer</li>
              </ul>
              <h3>Links</h3>
              <ul>
                <li>
                  <a href="LINKEDIN_URL">LinkedIn</a>
                </li>
                <li>
                  <a href="GITHUB_URL">Github</a>
                </li>
                <li>
                  <a href="INSTAGRAM_URL" >Instagram</a>
                </li>
              </ul>
            </div>
          </div>
       
          <div className="card col-lg-8 border-0 bg-light">
            <div className="card-body " style={{paddingRight:'2rem'}}>
              <div className="d-flex justify-content-between align-items-center">
                <h2>Vivek Panth</h2>
                <button className="btn btn-primary">Edit Profile</button>
              </div>
              <h4 className=" " style={{marginBlockEnd:'6rem'}} >Web Developer</h4>
              <br />
              <div className="mt-4"  >
                <button
                  className={`btn ${
                    activeTab === "about" ? "btn-primary" : "btn-secondary"
                  } me-3`}
                  onClick={() => handleTabChange("about")}
                >
                  About
                </button>
                <button
                  className={`btn ${
                    activeTab === "timeline" ? "btn-primary" : "btn-secondary"
                  } me-3`}
                  onClick={() => handleTabChange("timeline")}
                >
                  Timeline
                </button>
              </div>
              <div className="mt-4">
                {activeTab === "about" && renderAboutContent()}
                {activeTab === "timeline" && renderTimelineContent()}
              </div>
            </div>
          </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default About;
