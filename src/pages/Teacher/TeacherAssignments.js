import React, { Component} from 'react';

export default props => (
<div className="page-container">
  <div className="main-content">
    <div className="page-header no-gutters">
      <div className="row align-items-md-center">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-5">
              <div className="input-affix m-v-10">
                <i className="prefix-icon anticon anticon-search opacity-04" />
                <input type="text" className="form-control" placeholder="Search Project" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="card" id="list-view">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Assignment</th>
                  <th>No. Of Submissions</th>
                  <th>Due Date</th>
                  <th>Progress</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="media align-items-center">
                      <div className="m-l-10">
                        <h5 className="m-b-0">OOP - Assignment 1</h5>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>10/98 Students</span>
                  </td>
                  <td>
                    <span>16 Dec 2020</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="progress progress-sm w-100 m-b-0">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '20%'}} />
                      </div>
                      <div className="m-l-10">
                        <i className="anticon anticon-check-o text-primary" />
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
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
                          <i className="anticon anticon-edit" />
                          <span className="m-l-10">Edit</span>
                        </button>
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-delete" />
                          <span className="m-l-10">Delete</span>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="media align-items-center">
                      <div className="m-l-10">
                        <h5 className="m-b-0">OOP - Assignment 1</h5>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>10/98 Students</span>
                  </td>
                  <td>
                    <span>16 Dec 2020</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="progress progress-sm w-100 m-b-0">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '20%'}} />
                      </div>
                      <div className="m-l-10">
                        <i className="anticon anticon-check-o text-primary" />
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
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
                          <i className="anticon anticon-edit" />
                          <span className="m-l-10">Edit</span>
                        </button>
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-delete" />
                          <span className="m-l-10">Delete</span>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="media align-items-center">
                      <div className="m-l-10">
                        <h5 className="m-b-0">OOP - Assignment 1</h5>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>10/98 Students</span>
                  </td>
                  <td>
                    <span>16 Dec 2020</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="progress progress-sm w-100 m-b-0">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '20%'}} />
                      </div>
                      <div className="m-l-10">
                        <i className="anticon anticon-check-o text-primary" />
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
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
                          <i className="anticon anticon-edit" />
                          <span className="m-l-10">Edit</span>
                        </button>
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-delete" />
                          <span className="m-l-10">Delete</span>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="media align-items-center">
                      <div className="m-l-10">
                        <h5 className="m-b-0">OOP - Assignment 1</h5>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>10/98 Students</span>
                  </td>
                  <td>
                    <span>16 Dec 2020</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="progress progress-sm w-100 m-b-0">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '20%'}} />
                      </div>
                      <div className="m-l-10">
                        <i className="anticon anticon-check-o text-primary" />
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
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
                          <i className="anticon anticon-edit" />
                          <span className="m-l-10">Edit</span>
                        </button>
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-delete" />
                          <span className="m-l-10">Delete</span>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="media align-items-center">
                      <div className="m-l-10">
                        <h5 className="m-b-0">OOP - Assignment 1</h5>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>10/98 Students</span>
                  </td>
                  <td>
                    <span>16 Dec 2020</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="progress progress-sm w-100 m-b-0">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '20%'}} />
                      </div>
                      <div className="m-l-10">
                        <i className="anticon anticon-check-o text-primary" />
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
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
                          <i className="anticon anticon-edit" />
                          <span className="m-l-10">Edit</span>
                        </button>
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-delete" />
                          <span className="m-l-10">Delete</span>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="media align-items-center">
                      <div className="m-l-10">
                        <h5 className="m-b-0">OOP - Assignment 1</h5>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>10/98 Students</span>
                  </td>
                  <td>
                    <span>16 Dec 2020</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="progress progress-sm w-100 m-b-0">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '20%'}} />
                      </div>
                      <div className="m-l-10">
                        <i className="anticon anticon-check-o text-primary" />
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
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
                          <i className="anticon anticon-edit" />
                          <span className="m-l-10">Edit</span>
                        </button>
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-delete" />
                          <span className="m-l-10">Delete</span>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="media align-items-center">
                      <div className="m-l-10">
                        <h5 className="m-b-0">OOP - Assignment 1</h5>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>98/98 Students</span>
                  </td>
                  <td>
                    <span>16 Dec 2020</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="progress progress-sm w-100 m-b-0">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}} />
                      </div>
                      <div className="m-l-10">
                        <i className="anticon anticon-check-o text-success" />
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
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
                          <i className="anticon anticon-edit" />
                          <span className="m-l-10">Edit</span>
                        </button>
                        <button className="dropdown-item" type="button">
                          <i className="anticon anticon-delete" />
                          <span className="m-l-10">Delete</span>
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
  <footer className="footer">
    <div className="footer-content">
      <p className="m-b-0">Copyright © 2020 COMSATS University. All rights reserved.</p>
      <span>
      </span>
    </div>
  </footer>
</div>

    )