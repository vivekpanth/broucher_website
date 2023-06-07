

import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="row m-4 mb-1 d-flex justify-content-between">
        <div className="col-12 col-md-6 col-lg-3 mb-4 ">
          <div className="p-3 bg-light rounded">
            <img
              src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
              alt="Logo"
              className=" "
              style={{ width: "20px", height: "20px", marginRight: "10px" }}
            />
            <span className="font-weight-bold mt-3"><strong>Phone</strong></span>
            <p>+91 6261895549</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="p-3 bg-light rounded">
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
              alt="Logo"
              className=""
              style={{ width: "20px", height: "20px", marginRight: "10px" }}
            />
            <span className="font-weight-bold mt-3"><strong>Email</strong></span>
            <p>vivekpanth09@gmail.com</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="p-3 bg-light rounded">
            <img
              src="https://cdn-icons-png.flaticon.com/512/992/992705.png"
              alt="Logo"
              className=""
              style={{ width: "20px", height: "20px", marginRight: "10px" }}
            />
            <span className="font-weight-bold mt-3"><strong>Address</strong></span>
            <p>Bhopal, India</p>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center" >
  <div className="shadow p-3 mb-3 bg-body rounded" style={{ width: "100%", maxWidth: "500px" }}>
    <h2 className="ms-3 mt-1">Get in Touch</h2>
    <form className="d-flex flex-column">
      <div className="row">
        <div className="col-12 col-md-6 mx-2 my-1">
          <input type="text" name="name" placeholder="Your name" className="form-control" />
        </div>
        <div className="col-12 col-md-6 mx-2 my-1">
          <input type="email" name="email" placeholder="Your email" className="form-control" />
        </div>
      
        <div className="col-12 col-md-6 mx-2 my-1">
          <input type="text" name="contact" placeholder="Your contact no" className="form-control" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 mx-2 my-1">
          <textarea name="message" placeholder="Your Message" className="form-control" rows="4"></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 m-2">
          <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>Send Message</button>
        </div>
      </div>
    </form>
  </div>
</div>

    </div>
  );
};

export default Contact;
