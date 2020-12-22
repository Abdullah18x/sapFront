import React, { Component} from 'react';

export default props => (
    <div className="page-container">
  <div className="main-content">
    <div className="page-header">
      <div className="header-sub-title">
        <nav className="breadcrumb breadcrumb-dash">
          <a href="#" className="breadcrumb-item"><i className="anticon anticon-home m-r-5" />Home</a>
          <a className="breadcrumb-item" href="#">Sections</a>
          <span className="breadcrumb-item active">Add Section</span>
        </nav>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
        <h4>Add Sections</h4>
        <div className="m-t-25">
          <form>
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="customFile" />
              <label className="custom-file-label" htmlFor="customFile">Choose file</label>
            </div>
            <button type="submit" className="m-t-30 btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <footer className="footer">
    <div className="footer-content">
      <p className="m-b-0">Copyright © 2020 COMSATS University. All rights reserved.</p>
      <span>
      </span>
    </div>
  </footer>
  {props.children}
</div>

)