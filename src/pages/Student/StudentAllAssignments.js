import React, {Component} from 'react';

class StudentAllAssignments extends React.Component {
    render() {
        return (
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
                  <div className="col-md-6">
                    <div className="text-md-right m-v-10">
                      <div className="btn-group m-r-10">
                        <button id="list-view-btn" type="button" className="btn btn-default btn-icon" data-toggle="tooltip" data-placement="bottom" title="List View">
                          <i className="anticon anticon-ordered-list" />
                        </button>
                        <button id="card-view-btn" type="button" className="btn btn-default btn-icon active" data-toggle="tooltip" data-placement="bottom" title="Card View">
                          <i className="anticon anticon-appstore" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div id="card-view">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="media">
                              <div className="avatar avatar-image rounded">
                                <img src="../assets/images/others/thumb-1.jpg" alt="" />
                              </div>
                              <div className="m-l-10">
                                <h5 className="m-b-0">Mind Cog App</h5>
                                <span className="text-muted font-size-13">31 Tasks</span>
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
                                  <i className="anticon anticon-edit" />
                                  <span className="m-l-10">Edit</span>
                                </button>
                                <button className="dropdown-item" type="button">
                                  <i className="anticon anticon-delete" />
                                  <span className="m-l-10">Delete</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <p className="m-t-25">European minnow priapumfish mosshead warbonnet shrimpfish.</p>
                          <div className="m-t-30">
                            <div className="d-flex justify-content-between">
                              <span className="font-weight-semibold">Progress</span>
                              <span className="font-weight-semibold">100%</span>
                            </div>
                            <div className="progress progress-sm m-t-10">
                              <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}} />
                            </div>
                          </div>
                          <div className="m-t-20">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <span className="badge badge-pill badge-cyan">Ready</span>
                              </div>
                              <span>16 Dec 2020</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="media">
                              <div className="avatar avatar-image rounded">
                                <img src="../assets/images/others/thumb-2.jpg" alt="" />
                              </div>
                              <div className="m-l-10">
                                <h5 className="m-b-0">Mill Real Estate</h5>
                                <span className="text-muted font-size-13">56 Tasks</span>
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
                                  <i className="anticon anticon-edit" />
                                  <span className="m-l-10">Edit</span>
                                </button>
                                <button className="dropdown-item" type="button">
                                  <i className="anticon anticon-delete" />
                                  <span className="m-l-10">Delete</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <p className="m-t-25">Efficiently unleash cross-media information without cross-media value.</p>
                          <div className="m-t-30">
                            <div className="d-flex justify-content-between">
                              <span className="font-weight-semibold">Progress</span>
                              <span className="font-weight-semibold">100%</span>
                            </div>
                            <div className="progress progress-sm m-t-10">
                              <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}} />
                            </div>
                          </div>
                          <div className="m-t-20">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <span className="badge badge-pill badge-cyan">Ready</span>
                              </div>
                              <span>16 Dec 2020</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="media">
                              <div className="avatar avatar-image rounded">
                                <img src="../assets/images/others/thumb-3.jpg" alt="" />
                              </div>
                              <div className="m-l-10">
                                <h5 className="m-b-0">Eastern Sack</h5>
                                <span className="text-muted font-size-13">21 Tasks</span>
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
                                  <i className="anticon anticon-edit" />
                                  <span className="m-l-10">Edit</span>
                                </button>
                                <button className="dropdown-item" type="button">
                                  <i className="anticon anticon-delete" />
                                  <span className="m-l-10">Delete</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <p className="m-t-25">Jelly-o sesame snaps halvah croissant oat cake cookie.</p>
                          <div className="m-t-30">
                            <div className="d-flex justify-content-between">
                              <span className="font-weight-semibold">Progress</span>
                              <span className="font-weight-semibold">87%</span>
                            </div>
                            <div className="progress progress-sm m-t-10">
                              <div className="progress-bar" role="progressbar" style={{width: '87%'}} />
                            </div>
                          </div>
                          <div className="m-t-20">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <span className="badge badge-pill badge-blue">In Progress</span>
                              </div>
                              <span>16 Dec 2020</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="media">
                              <div className="avatar avatar-image rounded">
                                <img src="../assets/images/others/thumb-4.jpg" alt="" />
                              </div>
                              <div className="m-l-10">
                                <h5 className="m-b-0">Good Beat</h5>
                                <span className="text-muted font-size-13">38 Tasks</span>
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
                                  <i className="anticon anticon-edit" />
                                  <span className="m-l-10">Edit</span>
                                </button>
                                <button className="dropdown-item" type="button">
                                  <i className="anticon anticon-delete" />
                                  <span className="m-l-10">Delete</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <p className="m-t-25">Irish skinny, grinder affogato, dark, sweet carajillo flavour seasonal.</p>
                          <div className="m-t-30">
                            <div className="d-flex justify-content-between">
                              <span className="font-weight-semibold">Progress</span>
                              <span className="font-weight-semibold">73%</span>
                            </div>
                            <div className="progress progress-sm m-t-10">
                              <div className="progress-bar" role="progressbar" style={{width: '73%'}} />
                            </div>
                          </div>
                          <div className="m-t-20">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <span className="badge badge-pill badge-blue">In Progress</span>
                              </div>
                              <span>16 Dec 2020</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="media">
                              <div className="avatar avatar-image rounded">
                                <img src="../assets/images/others/thumb-5.jpg" alt="" />
                              </div>
                              <div className="m-l-10">
                                <h5 className="m-b-0">Fortier Studio</h5>
                                <span className="text-muted font-size-13">68 Tasks</span>
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
                                  <i className="anticon anticon-edit" />
                                  <span className="m-l-10">Edit</span>
                                </button>
                                <button className="dropdown-item" type="button">
                                  <i className="anticon anticon-delete" />
                                  <span className="m-l-10">Delete</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <p className="m-t-25">Let us wax poetic about the beauty of the cheeseburger.</p>
                          <div className="m-t-30">
                            <div className="d-flex justify-content-between">
                              <span className="font-weight-semibold">Progress</span>
                              <span className="font-weight-semibold">73%</span>
                            </div>
                            <div className="progress progress-sm m-t-10">
                              <div className="progress-bar" role="progressbar" style={{width: '73%'}} />
                            </div>
                          </div>
                          <div className="m-t-20">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <span className="badge badge-pill badge-blue">In Progress</span>
                              </div>
                              <span>16 Dec 2020</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="media">
                              <div className="avatar avatar-image rounded">
                                <img src="../assets/images/others/thumb-6.jpg" alt="" />
                              </div>
                              <div className="m-l-10">
                                <h5 className="m-b-0">Indi Wheel Web</h5>
                                <span className="text-muted font-size-13">68 Tasks</span>
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
                                  <i className="anticon anticon-edit" />
                                  <span className="m-l-10">Edit</span>
                                </button>
                                <button className="dropdown-item" type="button">
                                  <i className="anticon anticon-delete" />
                                  <span className="m-l-10">Delete</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <p className="m-t-25">Here's the story of a man named Brady who was busy with three boys</p>
                          <div className="m-t-30">
                            <div className="d-flex justify-content-between">
                              <span className="font-weight-semibold">Progress</span>
                              <span className="font-weight-semibold">62%</span>
                            </div>
                            <div className="progress progress-sm m-t-10">
                              <div className="progress-bar" role="progressbar" style={{width: '62%'}} />
                            </div>
                          </div>
                          <div className="m-t-20">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <span className="badge badge-pill badge-blue">In Progress</span>
                              </div>
                              <span>16 Dec 2020</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="media">
                              <div className="avatar avatar-image rounded">
                                <img src="../assets/images/others/thumb-7.jpg" alt="" />
                              </div>
                              <div className="m-l-10">
                                <h5 className="m-b-0">Austin Lab</h5>
                                <span className="text-muted font-size-13">90 Tasks</span>
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
                                  <i className="anticon anticon-edit" />
                                  <span className="m-l-10">Edit</span>
                                </button>
                                <button className="dropdown-item" type="button">
                                  <i className="anticon anticon-delete" />
                                  <span className="m-l-10">Delete</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <p className="m-t-25">Caerphilly swiss fromage frais. Brie cheese and wine fromage.</p>
                          <div className="m-t-30">
                            <div className="d-flex justify-content-between">
                              <span className="font-weight-semibold">Progress</span>
                              <span className="font-weight-semibold">62%</span>
                            </div>
                            <div className="progress progress-sm m-t-10">
                              <div className="progress-bar" role="progressbar" style={{width: '62%'}} />
                            </div>
                          </div>
                          <div className="m-t-20">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <span className="badge badge-pill badge-blue">In Progress</span>
                              </div>
                              <span>16 Dec 2020</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="media">
                              <div className="avatar avatar-image rounded">
                                <img src="../assets/images/others/thumb-8.jpg" alt="" />
                              </div>
                              <div className="m-l-10">
                                <h5 className="m-b-0">Moody Agency</h5>
                                <span className="text-muted font-size-13">165 Tasks</span>
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
                                  <i className="anticon anticon-edit" />
                                  <span className="m-l-10">Edit</span>
                                </button>
                                <button className="dropdown-item" type="button">
                                  <i className="anticon anticon-delete" />
                                  <span className="m-l-10">Delete</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <p className="m-t-25">Do you see any Teletubbies in here? The path of the righteous.</p>
                          <div className="m-t-30">
                            <div className="d-flex justify-content-between">
                              <span className="font-weight-semibold">Behind</span>
                              <span className="font-weight-semibold">28%</span>
                            </div>
                            <div className="progress progress-sm m-t-10">
                              <div className="progress-bar bg-danger" role="progressbar" style={{width: '28%'}} />
                            </div>
                          </div>
                          <div className="m-t-20">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <span className="badge badge-pill badge-red">In Progress</span>
                              </div>
                              <span>16 Dec 2020</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card d-none" id="list-view">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Project</th>
                            <th>Tasks</th>
                            <th>Due Date</th>
                            <th>Progress</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="media align-items-center">
                                <div className="avatar avatar-image rounded">
                                  <img src="../assets/images/others/thumb-1.jpg" alt="" />
                                </div>
                                <div className="m-l-10">
                                  <h5 className="m-b-0">Mind Cog App</h5>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span>31 Tasks</span>
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
                          <tr>
                            <td>
                              <div className="media align-items-center">
                                <div className="avatar avatar-image rounded">
                                  <img src="../assets/images/others/thumb-2.jpg" alt="" />
                                </div>
                                <div className="m-l-10">
                                  <h5 className="m-b-0">Mill Real Estate</h5>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span>56 Tasks</span>
                            </td><td>
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
                          <tr>
                            <td>
                              <div className="media align-items-center">
                                <div className="avatar avatar-image rounded">
                                  <img src="../assets/images/others/thumb-3.jpg" alt="" />
                                </div>
                                <div className="m-l-10">
                                  <h5 className="m-b-0">Eastern Sack</h5>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span>21 Tasks</span>
                            </td>
                            <td>
                              <span>16 Dec 2020</span>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="progress progress-sm w-100 m-b-0">
                                  <div className="progress-bar" role="progressbar" style={{width: '87%'}} />
                                </div>
                                <div className="m-l-10">
                                  87%
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
                                <div className="avatar avatar-image rounded">
                                  <img src="../assets/images/others/thumb-4.jpg" alt="" />
                                </div>
                                <div className="m-l-10">
                                  <h5 className="m-b-0">Good Beat</h5>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span>38 Tasks</span>
                            </td>
                            <td>
                              <span>16 Dec 2020</span>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="progress progress-sm w-100 m-b-0">
                                  <div className="progress-bar" role="progressbar" style={{width: '73%'}} />
                                </div>
                                <div className="m-l-10">
                                  73%
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
                                <div className="avatar avatar-image rounded">
                                  <img src="../assets/images/others/thumb-5.jpg" alt="" />
                                </div>
                                <div className="m-l-10">
                                  <h5 className="m-b-0">Fortier Studio</h5>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span>68 Tasks</span>
                            </td>
                            <td>
                              <span>16 Dec 2020</span>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="progress progress-sm w-100 m-b-0">
                                  <div className="progress-bar" role="progressbar" style={{width: '73%'}} />
                                </div>
                                <div className="m-l-10">
                                  73%
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
                                <div className="avatar avatar-image rounded">
                                  <img src="../assets/images/others/thumb-6.jpg" alt="" />
                                </div>
                                <div className="m-l-10">
                                  <h5 className="m-b-0">Indi Wheel Web</h5>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span>68 Tasks</span>
                            </td>
                            <td>
                              <span>16 Dec 2020</span>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="progress progress-sm w-100 m-b-0">
                                  <div className="progress-bar" role="progressbar" style={{width: '62%'}} />
                                </div>
                                <div className="m-l-10">
                                  62%
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
                                <div className="avatar avatar-image rounded">
                                  <img src="../assets/images/others/thumb-7.jpg" alt="" />
                                </div>
                                <div className="m-l-10">
                                  <h5 className="m-b-0">Austin Lab</h5>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span>90 Tasks</span>
                            </td>
                            <td>
                              <span>16 Dec 2020</span>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="progress progress-sm w-100 m-b-0">
                                  <div className="progress-bar" role="progressbar" style={{width: '62%'}} />
                                </div>
                                <div className="m-l-10">
                                  62%
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
                                <div className="avatar avatar-image rounded">
                                  <img src="../assets/images/others/thumb-8.jpg" alt="" />
                                </div>
                                <div className="m-l-10">
                                  <h5 className="m-b-0">Moody Agency</h5>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span>165 Tasks</span>
                            </td>
                            <td>
                              <span>16 Dec 2020</span>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="progress progress-sm w-100 m-b-0">
                                  <div className="progress-bar bg-danger" role="progressbar" style={{width: '28%'}} />
                                </div>
                                <div className="m-l-10">
                                  <i className="anticon anticon-close-o text-danger" />
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
              <div className="modal fade" id="create-new-project">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Create New Project</h5>
                      <button type="button" className="close" data-dismiss="modal">
                        <i className="anticon anticon-close" />
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-group">
                          <label htmlFor="new-project-name">Project</label>
                          <input type="text" className="form-control" id="new-project-name" placeholder="Please input project name" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="new-project-desc">Description</label>
                          <textarea id="new-project-desc" className="form-control" placeholder defaultValue={""} />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary">Create Project</button>
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
    }
}

export default StudentAllAssignments