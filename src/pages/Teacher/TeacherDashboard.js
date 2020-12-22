import React, { Component} from 'react';

export default props => (
<div className="page-container">
  <div className="main-content">
    <div className="page-header no-gutters">
      <div className="d-md-flex align-items-md-center justify-content-between">
        <div className="media m-v-10 align-items-center">
          <div className="avatar avatar-image avatar-lg">
            <img src="../assets/images/avatars/thumb.jpg" alt="" />
          </div>
          <div className="media-body m-l-15">
            <h4 className="m-b-0">Welcome back, Teacher!</h4>
          </div>
        </div>
        <div className="d-md-flex align-items-center d-none">
          <div className="media align-items-center m-r-40 m-v-5">
            <div className="font-size-27">
              <i className="text-primary anticon anticon-profile" />
            </div>
            <div className="d-flex align-items-center m-l-10">
              <h2 className="m-b-0 m-r-5">5</h2>
              <span className="text-gray">Assignments Pending</span>
            </div>
          </div>
          <div className="media align-items-center m-r-40 m-v-5">
            <div className="font-size-27">
              <i className="text-danger anticon anticon-team" />
            </div>
            <div className="d-flex align-items-center m-l-10">
              <h2 className="m-b-0 m-r-5">23</h2>
              <span className="text-gray">At Risk Students</span>
            </div>
          </div>
          <div className="media align-items-center m-v-5">
            <div className="font-size-27">
              <i className="text-success anticon anticon-team" />
            </div>
            <div className="d-flex align-items-center m-l-10">
              <h2 className="m-b-0 m-r-5">98</h2>
              <span className="text-gray">Total Students</span>
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
              <h5>Recent Submissions</h5>
              <div>
                <a href="javascript:void(0);" className="btn btn-sm btn-default">View All</a>
              </div>
            </div>
            <div className="m-t-30">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Registration #</th>
                      <th>Name</th>
                      <th>Return Date</th>
                      <th>Assignment</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>FA17-BSE-016</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-image" style={{height: '30px', minWidth: '30px', maxWidth: '30px'}}>
                              <img src="../assets/images/avatars/thumb.jpg" alt="" />
                            </div>
                            <h6 className="m-l-10 m-b-0">ALI ZAIN</h6>
                          </div>
                        </div>
                      </td>
                      <td>17 Dec 2020</td>
                      <td>OOP - Assignment 1</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="badge badge-success badge-dot m-r-10" />
                          <span>Approved</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>FA17-BSE-016</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-image" style={{height: '30px', minWidth: '30px', maxWidth: '30px'}}>
                              <img src="../assets/images/avatars/thumb.jpg" alt="" />
                            </div>
                            <h6 className="m-l-10 m-b-0">ALI ZAIN</h6>
                          </div>
                        </div>
                      </td>
                      <td>17 Dec 2020</td>
                      <td>OOP - Assignment 1</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="badge badge-success badge-dot m-r-10" />
                          <span>Approved</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>FA17-BSE-016</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-image" style={{height: '30px', minWidth: '30px', maxWidth: '30px'}}>
                              <img src="../assets/images/avatars/thumb.jpg" alt="" />
                            </div>
                            <h6 className="m-l-10 m-b-0">ALI ZAIN</h6>
                          </div>
                        </div>
                      </td>
                      <td>17 Dec 2020</td>
                      <td>OOP - Assignment 1</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="badge badge-danger badge-dot m-r-10" />
                          <span>At Risk</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>FA17-BSE-016</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-image" style={{height: '30px', minWidth: '30px', maxWidth: '30px'}}>
                              <img src="../assets/images/avatars/thumb.jpg" alt="" />
                            </div>
                            <h6 className="m-l-10 m-b-0">ALI ZAIN</h6>
                          </div>
                        </div>
                      </td>
                      <td>17 Dec 2020</td>
                      <td>OOP - Assignment 1</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="badge badge-success badge-dot m-r-10" />
                          <span>Approved</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>FA17-BSE-016</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-image" style={{height: '30px', minWidth: '30px', maxWidth: '30px'}}>
                              <img src="../assets/images/avatars/thumb.jpg" alt="" />
                            </div>
                            <h6 className="m-l-10 m-b-0">ALI ZAIN</h6>
                          </div>
                        </div>
                      </td>
                      <td>17 Dec 2020</td>
                      <td>OOP - Assignment 1</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="badge badge-danger badge-dot m-r-10" />
                          <span>At Risk</span>
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
    <div className="row">
      <div className="col-md-12 col-lg-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-b-0">Latest Upload</h5>
              <div>
                <a href="javascript:void(0);" className="btn btn-sm btn-default">View All</a>
              </div>
            </div>
            <div className="m-t-30">
              <div className="m-b-25">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="media align-items-center">
                    <div className="font-size-35">
                      <i className="anticon anticon-file-word text-primary" />
                    </div>
                    <div className="m-l-15">
                      <h6 className="m-b-0">
                        <a className="text-dark" href="javascript:void(0);">Documentation.doc</a>
                      </h6>
                      <p className="text-muted m-b-0">1.2MB</p>
                    </div>
                  </div>
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
                </div>
              </div>
              <div className="m-b-25">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="media align-items-center">
                    <div className="font-size-35">
                      <i className="anticon anticon-file-excel text-success" />
                    </div>
                    <div className="m-l-15">
                      <h6 className="m-b-0">
                        <a className="text-dark" href="javascript:void(0);">Expensess.xls</a>
                      </h6>
                      <p className="text-muted m-b-0">518KB</p>
                    </div>
                  </div>
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
                </div>
              </div>
              <div className="m-b-25">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="media align-items-center">
                    <div className="font-size-35">
                      <i className="anticon anticon-file-text text-secondary" />
                    </div>
                    <div className="m-l-15">
                      <h6 className="m-b-0">
                        <a className="text-dark" href="javascript:void(0);">Receipt.txt</a>
                      </h6>
                      <p className="text-muted m-b-0">355KB</p>
                    </div>
                  </div>
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
                </div>
              </div>
              <div className="m-b-25">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="media align-items-center">
                    <div className="font-size-35">
                      <i className="anticon anticon-file-word text-primary" />
                    </div>
                    <div className="m-l-15">
                      <h6 className="m-b-0">
                        <a className="text-dark" href="javascript:void(0);">Project Requirement.doc</a>
                      </h6>
                      <p className="text-muted m-b-0">1.6MB</p>
                    </div>
                  </div>
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
                </div>
              </div>
              <div className="m-b-25">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="media align-items-center">
                    <div className="font-size-35">
                      <i className="anticon anticon-file-pdf text-danger" />
                    </div>
                    <div className="m-l-15">
                      <h6 className="m-b-0">
                        <a className="text-dark" href="javascript:void(0);">App Flow.pdf</a>
                      </h6>
                      <p className="text-muted m-b-0">19.8MB</p>
                    </div>
                  </div>
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
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="media align-items-center">
                    <div className="font-size-35">
                      <i className="anticon anticon-file-ppt text-warning" />
                    </div>
                    <div className="m-l-15">
                      <h6 className="m-b-0">
                        <a className="text-dark" href="javascript:void(0);">Presentation.ppt</a>
                      </h6>
                      <p className="text-muted m-b-0">2.7MB</p>
                    </div>
                  </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Upcoming Labs</h5>
              <div>
                <a href className="btn btn-default btn-sm">View All</a> 
              </div>
            </div>
            <div className="m-t-30">
              <div className="d-flex m-b-20">
                <div className="text-center">
                  <div className="avatar avatar-text avatar-blue avatar-lg rounded">
                    <span className="font-size-22">17</span>
                  </div>
                </div>
                <div className="m-l-20">
                  <h5 className="m-b-0">
                    <a className="text-dark">AI Lab 5</a>
                  </h5>
                  <p className="m-b-0">Execute core that as result.</p>
                </div>
              </div>
              <div className="d-flex m-b-20">
                <div className="text-center">
                  <div className="avatar avatar-text avatar-cyan avatar-lg rounded">
                    <span className="font-size-22">21</span>
                  </div>
                </div>
                <div className="m-l-20">
                  <h5 className="m-b-0">
                    <a className="text-dark">Project Schdule</a>
                  </h5>
                  <p className="m-b-0">Special cloth alert always.</p>
                </div>
              </div>
              <div className="d-flex m-b-20">
                <div className="text-center">
                  <div className="avatar avatar-text avatar-gold avatar-lg rounded">
                    <span className="font-size-22">25</span>
                  </div>
                </div>
                <div className="m-l-20">
                  <h5 className="m-b-0">
                    <a className="text-dark">Design Discussion</a>
                  </h5>
                  <p className="m-b-0">Let us wax poetic about.</p>
                </div>
              </div>
              <div className="d-flex m-b-20">
                <div className="text-center">
                  <div className="avatar avatar-text avatar-blue avatar-lg rounded">
                    <span className="font-size-22">17</span>
                  </div>
                </div>
                <div className="m-l-20">
                  <h5 className="m-b-0">
                    <a className="text-dark">AI Lab 5</a>
                  </h5>
                  <p className="m-b-0">Execute core that as result.</p>
                </div>
              </div>
              <div className="d-flex m-b-20">
                <div className="text-center">
                  <div className="avatar avatar-text avatar-blue avatar-lg rounded">
                    <span className="font-size-22">17</span>
                  </div>
                </div>
                <div className="m-l-20">
                  <h5 className="m-b-0">
                    <a className="text-dark">AI Lab 5</a>
                  </h5>
                  <p className="m-b-0">Execute core that as result.</p>
                </div>
              </div>
              <div className="d-flex m-b-20">
                <div className="text-center">
                  <div className="avatar avatar-text avatar-blue avatar-lg rounded">
                    <span className="font-size-22">17</span>
                  </div>
                </div>
                <div className="m-l-20">
                  <h5 className="m-b-0">
                    <a className="text-dark">AI Lab 5</a>
                  </h5>
                  <p className="m-b-0">Execute core that as result.</p>
                </div>
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