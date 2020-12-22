import React, { Component} from 'react';
export default props => (
    <div className="page-container">
  <div className="main-content">
    <div className="page-header">
      <div className="header-sub-title">
        <nav className="breadcrumb breadcrumb-dash">
          <a href="#" className="breadcrumb-item"><i className="anticon anticon-home m-r-5" />Home</a>
          <a className="breadcrumb-item" href="#">Teachers</a>
          <span className="breadcrumb-item active">View All Teachers</span>
        </nav>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
        <h4>View All Teachers</h4>
        <div className="m-t-25">
          <table id="data-table" className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Section</th>
                <th>Subject</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dr. Majid Iqbal</td>
                <td>SE-7A | SE-8B</td>
                <td>OOP, AI</td>
                <td>
                  <div className="dropdown dropdown-animated scale-left">
                    <a className="text-gray font-size-18" href="javascript:void(0);" data-toggle="dropdown">
                      <i className="anticon anticon-ellipsis" />
                    </a>
                    <div className="dropdown-menu">
                      <button className="dropdown-item" type="button">
                        <i className="anticon anticon-eye" />
                        <span className="m-l-10">View</span>
                      </button>
                      <button className="dropdown-item" type="button">
                        <i className="anticon anticon-download" />
                        <span className="m-l-10">Download</span>
                      </button>
                      <button className="dropdown-item" type="button">
                        <i className="anticon anticon-delete" />
                        <span className="m-l-10">Remove</span>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Dr. Majid Iqbal</td>
                <td>SE-7A | SE-8B</td>
                <td>OOP, AI</td>
                <td>
                  <div className="dropdown dropdown-animated scale-left">
                    <a className="text-gray font-size-18" href="javascript:void(0);" data-toggle="dropdown">
                      <i className="anticon anticon-ellipsis" />
                    </a>
                    <div className="dropdown-menu">
                      <button className="dropdown-item" type="button">
                        <i className="anticon anticon-eye" />
                        <span className="m-l-10">View</span>
                      </button>
                      <button className="dropdown-item" type="button">
                        <i className="anticon anticon-download" />
                        <span className="m-l-10">Download</span>
                      </button>
                      <button className="dropdown-item" type="button">
                        <i className="anticon anticon-delete" />
                        <span className="m-l-10">Remove</span>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Dr. Majid Iqbal</td>
                <td>SE-7A | SE-8B</td>
                <td>OOP, AI</td>
                <td>
                  <div className="dropdown dropdown-animated scale-left">
                    <a className="text-gray font-size-18" href="javascript:void(0);" data-toggle="dropdown">
                      <i className="anticon anticon-ellipsis" />
                    </a>
                    <div className="dropdown-menu">
                      <button className="dropdown-item" type="button">
                        <i className="anticon anticon-eye" />
                        <span className="m-l-10">View</span>
                      </button>
                      <button className="dropdown-item" type="button">
                        <i className="anticon anticon-download" />
                        <span className="m-l-10">Download</span>
                      </button>
                      <button className="dropdown-item" type="button">
                        <i className="anticon anticon-delete" />
                        <span className="m-l-10">Remove</span>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Dr. Majid Iqbal</td>
                <td>SE-7A | SE-8B</td>
                <td>OOP, AI</td>
                <td>
                  <div className="dropdown dropdown-animated scale-left">
                    <a className="text-gray font-size-18" href="javascript:void(0);" data-toggle="dropdown">
                      <i className="anticon anticon-ellipsis" />
                    </a>
                    <div className="dropdown-menu">
                      <button className="dropdown-item" type="button">
                        <i className="anticon anticon-eye" />
                        <span className="m-l-10">View</span>
                      </button>
                      <button className="dropdown-item" type="button">
                        <i className="anticon anticon-download" />
                        <span className="m-l-10">Download</span>
                      </button>
                      <button className="dropdown-item" type="button">
                        <i className="anticon anticon-delete" />
                        <span className="m-l-10">Remove</span>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Dr. Majid Iqbal</td>
                <td>SE-7A | SE-8B</td>
                <td>OOP, AI</td>
                <td>
                  <div className="dropdown dropdown-animated scale-left">
                    <a className="text-gray font-size-18" href="javascript:void(0);" data-toggle="dropdown">
                      <i className="anticon anticon-ellipsis" />
                    </a>
                    <div className="dropdown-menu">
                      <button className="dropdown-item" type="button">
                        <i className="anticon anticon-eye" />
                        <span className="m-l-10">View</span>
                      </button>
                      <button className="dropdown-item" type="button">
                        <i className="anticon anticon-download" />
                        <span className="m-l-10">Download</span>
                      </button>
                      <button className="dropdown-item" type="button">
                        <i className="anticon anticon-delete" />
                        <span className="m-l-10">Remove</span>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody><tfoot>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Section</th>
                <th>Subject</th>
              </tr>
            </tfoot>
          </table>
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