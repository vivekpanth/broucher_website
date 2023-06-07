
import React from 'react';

const Login = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card" style={{ width: '50%' }}>
        <div className="row g-0">
          <div className="col-md-6">
            <img src="https://source.unsplash.com/200x200/?laptop" alt="Laptop" className="card-img" />
            <div className="card-body text-center">
              <p className="card-text">
                <a href="/signup" className="text-primary">Create an account</a>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title text-center mb-4 fw-bold">Sign In</h2>
              <form>
                <div className="mb-3">
                  <input type="email" name="email" placeholder="Your email" className="form-control" />
                </div>
                <div className="mb-3">
                  <input type="password" name="password" placeholder="Password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary w-50 mx-auto d-flex justify-content-center">Login</button>
              </form>
              <div className="text-center mt-4">
                <p className="mb-2">or login with</p>
                <div className="d-inline-flex align-items-center">
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="me-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="F" className="social-icon img-fluid" style={{ width: '20px', height: '20px', margin: '0 5px',fontWeight:'bold' }} />
                  </a>
                  <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="me-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="T" className="social-icon img-fluid" style={{ width: '20px', height: '20px', margin: '0 5px',fontWeight:'bold' }} />
                  </a>
                  <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className="me-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="G" className="social-icon img-fluid" style={{ width: '20px', height: '20px', margin: '0 5px',fontWeight:'bold' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


