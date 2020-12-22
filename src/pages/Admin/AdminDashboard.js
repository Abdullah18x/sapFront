import React, { Component} from 'react';
export default props =>(
    <div className="page-container">
  <div className="main-content">
    <div className="page-header no-gutters">
      <div className="d-md-flex align-items-md-center justify-content-between">
        <div className="media m-v-10 align-items-center">
          <div className="avatar avatar-image avatar-lg">
            <img src="../assets/images/avatars/thumb.jpg" alt="" />
          </div>
          <div className="media-body m-l-15">
            <h4 className="m-b-0">Welcome back, Admin!</h4>
          </div>
        </div>
        <div className="d-md-flex align-items-center d-none">
          <div className="media align-items-center m-r-40 m-v-5">
            <div className="font-size-27">
              <i className="text-primary anticon anticon-profile" />
            </div>
            <div className="d-flex align-items-center m-l-10">
              <h2 className="m-b-0 m-r-5">16</h2>
              <span className="text-gray">Sections</span>
            </div>
          </div>
          <div className="media align-items-center m-r-40 m-v-5">
            <div className="font-size-27">
              <i className="text-danger anticon anticon-team" />
            </div>
            <div className="d-flex align-items-center m-l-10">
              <h2 className="m-b-0 m-r-5">980</h2>
              <span className="text-gray">Total Students</span>
            </div>
          </div>
          <div className="media align-items-center m-r-40 m-v-5">
            <div className="font-size-27">
              <i className="text-success anticon anticon-team" />
            </div>
            <div className="d-flex align-items-center m-l-10">
              <h2 className="m-b-0 m-r-5">18</h2>
              <span className="text-gray">Total Subjects</span>
            </div>
          </div>
          <div className="media align-items-center m-v-5">
            <div className="font-size-27">
              <i className="text-success anticon anticon-team" />
            </div>
            <div className="d-flex align-items-center m-l-10">
              <h2 className="m-b-0 m-r-5">18</h2>
              <span className="text-gray">Total Teachers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h5>Recent Sections</h5>
              <div>
                <a href="javascript:void(0);" className="btn btn-sm btn-default">View All</a>
              </div>
            </div>
            <div className="m-t-30">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Section</th>
                      <th>Assigned Teachers</th>
                      <th>Total Teachers</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>SE-7A</td>
                      <td>3</td>
                      <td>98</td>
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
                      <td>SE-7A</td>
                      <td>3</td>
                      <td>98</td>
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
                      <td>SE-7A</td>
                      <td>3</td>
                      <td>98</td>
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
                      <td>SE-7A</td>
                      <td>3</td>
                      <td>98</td>
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
                      <td>SE-7A</td>
                      <td>3</td>
                      <td>98</td>
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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
</div>

)