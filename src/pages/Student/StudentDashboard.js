import React, {Component} from 'react';

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
                            <h4 className="m-b-0">Welcome back, Zain!</h4>
                            <span className="text-gray">FA17-BSE-016</span>
                        </div>
                        </div>
                        <div className="d-md-flex align-items-center d-none">
                        <div className="media align-items-center m-r-40 m-v-5">
                            <div className="font-size-27">
                            <i className="text-primary anticon anticon-profile" />
                            </div>
                            <div className="d-flex align-items-center m-l-10">
                            <h2 className="m-b-0 m-r-5">8</h2>
                            <span className="text-gray">Tasks Due</span>
                            </div>
                        </div>
                        <div className="media align-items-center m-r-40 m-v-5">
                            <div className="font-size-27">
                            <i className="text-success  anticon anticon-appstore" />
                            </div>
                            <div className="d-flex align-items-center m-l-10">
                            <h2 className="m-b-0 m-r-5">2</h2>
                            <span className="text-gray">Assignments Pending</span>
                            </div>
                        </div>
                        <div className="media align-items-center m-v-5">
                            <div className="font-size-27">
                            <i className="text-danger anticon anticon-team" />
                            </div>
                            <div className="d-flex align-items-center m-l-10">
                            <h2 className="m-b-0 m-r-5">12</h2>
                            <span className="text-gray">Assignments Returned</span>
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
                            <h5 className="mb-0">Assignments</h5>
                            <div>
                                <a href className="btn btn-default btn-sm">View All</a> 
                            </div>
                            </div>
                            <div className="table-responsive m-t-30">
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th>Lecturer</th>
                                    <th>Subject</th>
                                    <th>Tasks</th>
                                    <th>Status</th>
                                    <th>Due Date</th>
                                    <th>Progress</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-image" style={{minWidth: '40px'}}>
                                        <img src="../assets/images/avatars/thumb.jpg" alt="" />
                                        </div>
                                        <span className="m-l-10">Teacher's Name</span>
                                    </div>
                                    </td>
                                    <td>
                                    <div className="media align-items-center">
                                        <div>
                                        <span>OOP</span>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    <span>31</span>
                                    </td>
                                    <td>
                                    <span className="badge badge-pill badge-green font-size-12">Returned</span>
                                    </td>
                                    <td>16 Dec, 2020</td>
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
                                </tr>
                                <tr>
                                    <td>
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-image" style={{minWidth: '40px'}}>
                                        <img src="../assets/images/avatars/thumb.jpg" alt="" />
                                        </div>
                                        <span className="m-l-10">Teacher's Name</span>
                                    </div>
                                    </td>
                                    <td>
                                    <div className="media align-items-center">
                                        <div>
                                        <span>Programming  Fundamentals</span>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    <span>56</span>
                                    </td>
                                    <td>
                                    <span className="badge badge-pill badge-blue font-size-12">Pending</span>
                                    </td>
                                    <td>16 Dec, 2020</td>
                                    <td>
                                    <div className="d-flex align-items-center">
                                        <div className="progress progress-sm w-100 m-b-0">
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '76%'}} />
                                        </div>
                                        <div className="m-l-10">
                                        76%
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-image" style={{minWidth: '40px'}}>
                                        <img src="../assets/images/avatars/thumb.jpg" alt="" />
                                        </div>
                                        <span className="m-l-10">Teacher's Name</span>
                                    </div>
                                    </td>
                                    <td>
                                    <div className="media align-items-center">
                                        <div>
                                        <span>Software Testing</span>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    <span>21</span>
                                    </td>
                                    <td>
                                    <span className="badge badge-pill badge-blue font-size-12">Pending</span>
                                    </td>
                                    <td>16 Dec, 2020</td>
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
                                </tr>
                                <tr>
                                    <td>
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-image" style={{minWidth: '40px'}}>
                                        <img src="../assets/images/avatars/thumb.jpg" alt="" />
                                        </div>
                                        <span className="m-l-10">Teacher's Name</span>
                                    </div>
                                    </td>
                                    <td>
                                    <div className="media align-items-center">
                                        <div>
                                        <span>Visual Programming</span>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    <span>68</span>
                                    </td>
                                    <td>
                                    <span className="badge badge-pill badge-blue font-size-12">Pending</span>
                                    </td>
                                    <td>16 Dec, 2020</td>
                                    <td>
                                    <div className="d-flex align-items-center">
                                        <div className="progress progress-sm w-100 m-b-0">
                                        <div className="progress-bar" role="progressbar" style={{width: '68%'}} />
                                        </div>
                                        <div className="m-l-10">
                                        68%
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-image" style={{minWidth: '40px'}}>
                                        <img src="../assets/images/avatars/thumb.jpg" alt="" />
                                        </div>
                                        <span className="m-l-10">Teacher's Name</span>
                                    </div>
                                    </td>
                                    <td>
                                    <div className="media align-items-center">
                                        <div>
                                        <span>Web Technologies</span>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    <span>165</span>
                                    </td>
                                    <td>
                                    <span className="badge badge-pill badge-green font-size-12">Returned</span>
                                    </td>
                                    <td>16 Dec, 2020</td>
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
                                </tr>
                                </tbody>
                            </table>
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
                    <div className="col-md-12 col-lg-6">
                        <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                            <h5 className="m-b-0">Pending Tasks</h5>
                            <div>
                                <a href="javascript:void(0);" className="btn btn-sm btn-default">View All</a>
                            </div>
                            </div>
                        </div>
                        <div className="m-t-10">
                            <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#tab-today">Today</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tab-week">Week</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tab-month">Month</a>
                            </li>
                            </ul>
                            <div className="tab-content m-t-15">
                            <div className="tab-pane card-body fade show active" id="tab-today">
                                <div className="m-b-15">
                                <div className="d-flex align-items-center">
                                    <div className="checkbox">
                                    <input id="task-today-1" type="checkbox" />
                                    <label htmlFor="task-today-1" className="d-flex align-items-center">
                                        <span className="inline-block m-l-10">
                                        <span className="text-dark font-weight-semi-bold font-size-16">Define users and workflow</span>
                                        <span className="m-b-0 text-muted font-size-13 d-block">A cheeseburger is more than sandwich</span>
                                        </span>
                                    </label>
                                    </div>
                                </div>
                                </div>
                                <div className="m-b-15">
                                <div className="d-flex align-items-center">
                                    <div className="checkbox">
                                    <input id="task-today-2" type="checkbox" defaultChecked />
                                    <label htmlFor="task-today-2" className="d-flex align-items-center">
                                        <span className="inline-block m-l-10">
                                        <span className="text-dark font-weight-semi-bold font-size-16">Schedule jobs</span>
                                        <span className="m-b-0 text-muted font-size-13 d-block">I'm gonna build me an airport</span>
                                        </span>
                                    </label>
                                    </div>
                                </div>
                                </div>
                                <div className="m-b-15">
                                <div className="d-flex align-items-center">
                                    <div className="checkbox">
                                    <input id="task-today-3" type="checkbox" defaultChecked />
                                    <label htmlFor="task-today-3" className="d-flex align-items-center">
                                        <span className="inline-block m-l-10">
                                        <span className="text-dark font-weight-semi-bold font-size-16">Extend the data model</span>
                                        <span className="m-b-0 text-muted font-size-13 d-block">Let us wax poetic about cheeseburger</span>
                                        </span>
                                    </label>
                                    </div>
                                </div>
                                </div>
                                <div className="m-b-15">
                                <div className="d-flex align-items-center">
                                    <div className="checkbox">
                                    <input id="task-today-4" type="checkbox" />
                                    <label htmlFor="task-today-4" className="d-flex align-items-center">
                                        <span className="inline-block m-l-10">
                                        <span className="text-dark font-weight-semi-bold font-size-16">Change interface</span>
                                        <span className="m-b-0 text-muted font-size-13 d-block">Efficiently unleash cross-media information</span>
                                        </span>
                                    </label>
                                    </div>
                                </div>
                                </div>
                                <div className="m-b-15">
                                <div className="d-flex align-items-center">
                                    <div className="checkbox">
                                    <input id="task-today-5" type="checkbox" />
                                    <label htmlFor="task-today-5" className="d-flex align-items-center">
                                        <span className="inline-block m-l-10">
                                        <span className="text-dark font-weight-semi-bold font-size-16">Create databases</span>
                                        <span className="m-b-0 text-muted font-size-13 d-block">Here's the story of a man named Brady</span>
                                        </span>
                                    </label>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="tab-pane card-body fade" id="tab-week">
                                <div className="m-b-15">
                                <div className="d-flex align-items-center">
                                    <div className="checkbox">
                                    <input id="task-week-1" type="checkbox" />
                                    <label htmlFor="task-week-1" className="d-flex align-items-center">
                                        <span className="inline-block m-l-10">
                                        <span className="text-dark font-weight-semi-bold font-size-16">Verify connectivity</span>
                                        <span className="m-b-0 text-muted font-size-13 d-block">Bugger bag egg's old boy willy jolly</span>
                                        </span>
                                    </label>
                                    </div>
                                </div>
                                </div>
                                <div className="m-b-15">
                                <div className="d-flex align-items-center">
                                    <div className="checkbox">
                                    <input id="task-week-2" type="checkbox" />
                                    <label htmlFor="task-week-2" className="d-flex align-items-center">
                                        <span className="inline-block m-l-10">
                                        <span className="text-dark font-weight-semi-bold font-size-16">Order console machines</span>
                                        <span className="m-b-0 text-muted font-size-13 d-block">Value proposition alpha crowdsource</span>
                                        </span>
                                    </label>
                                    </div>
                                </div>
                                </div>
                                <div className="m-b-15">
                                <div className="d-flex align-items-center">
                                    <div className="checkbox">
                                    <input id="task-week-3" type="checkbox" defaultChecked />
                                    <label htmlFor="task-week-3" className="d-flex align-items-center">
                                        <span className="inline-block m-l-10">
                                        <span className="text-dark font-weight-semi-bold font-size-16">Customize Template</span>
                                        <span className="m-b-0 text-muted font-size-13 d-block">Do you see any Teletubbies in here</span>
                                        </span>
                                    </label>
                                    </div>
                                </div>
                                </div>
                                <div className="m-b-15">
                                <div className="d-flex align-items-center">
                                    <div className="checkbox">
                                    <input id="task-week-4" type="checkbox" defaultChecked />
                                    <label htmlFor="task-week-4" className="d-flex align-items-center">
                                        <span className="inline-block m-l-10">
                                        <span className="text-dark font-weight-semi-bold font-size-16">Batch schedule</span>
                                        <span className="m-b-0 text-muted font-size-13 d-block">Trillion a very small stage in a vast</span>
                                        </span>
                                    </label>
                                    </div>
                                </div>
                                </div>
                                <div className="m-b-15">
                                <div className="d-flex align-items-center">
                                    <div className="checkbox">
                                    <input id="task-week-5" type="checkbox" defaultChecked />
                                    <label htmlFor="task-week-5" className="d-flex align-items-center">
                                        <span className="inline-block m-l-10">
                                        <span className="text-dark font-weight-semi-bold font-size-16">Prepare implementation</span>
                                        <span className="m-b-0 text-muted font-size-13 d-block">Drop in axle roll-in rail slide</span>
                                        </span>
                                    </label>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="tab-pane card-body fade" id="tab-month">
                                <div className="m-b-15">
                                <div className="d-flex align-items-center">
                                    <div className="checkbox">
                                    <input id="task-month-1" type="checkbox" />
                                    <label htmlFor="task-month-1" className="d-flex align-items-center">
                                        <span className="inline-block m-l-10">
                                        <span className="text-dark font-weight-semi-bold font-size-16">Create user groups</span>
                                        <span className="m-b-0 text-muted font-size-13 d-block">Nipperkin run a rig ballast chase</span>
                                        </span>
                                    </label>
                                    </div>
                                </div>
                                </div>
                                <div className="m-b-15">
                                <div className="d-flex align-items-center">
                                    <div className="checkbox">
                                    <input id="task-month-2" type="checkbox" defaultChecked />
                                    <label htmlFor="task-month-2" className="d-flex align-items-center">
                                        <span className="inline-block m-l-10">
                                        <span className="text-dark font-weight-semi-bold font-size-16">Design Wireframe</span>
                                        <span className="m-b-0 text-muted font-size-13 d-block">Value proposition alpha crowdsource</span>
                                        </span>
                                    </label>
                                    </div>
                                </div>
                                </div>
                                <div className="m-b-15">
                                <div className="d-flex align-items-center">
                                    <div className="checkbox">
                                    <input id="task-month-3" type="checkbox" />
                                    <label htmlFor="task-month-3" className="d-flex align-items-center">
                                        <span className="inline-block m-l-10">
                                        <span className="text-dark font-weight-semi-bold font-size-16">Customize Template</span>
                                        <span className="m-b-0 text-muted font-size-13 d-block">I'll be sure to note that</span>
                                        </span>
                                    </label>
                                    </div>
                                </div>
                                </div>
                                <div className="m-b-15">
                                <div className="d-flex align-items-center">
                                    <div className="checkbox">
                                    <input id="task-month-4" type="checkbox" />
                                    <label htmlFor="task-month-4" className="d-flex align-items-center">
                                        <span className="inline-block m-l-10">
                                        <span className="text-dark font-weight-semi-bold font-size-16">Management meeting</span>
                                        <span className="m-b-0 text-muted font-size-13 d-block">Hand-crafted exclusive finest</span>
                                        </span>
                                    </label>
                                    </div>
                                </div>
                                </div>
                                <div className="m-b-15">
                                <div className="d-flex align-items-center">
                                    <div className="checkbox">
                                    <input id="task-month-5" type="checkbox" defaultChecked />
                                    <label htmlFor="task-month-5" className="d-flex align-items-center">
                                        <span className="inline-block m-l-10">
                                        <span className="text-dark font-weight-semi-bold font-size-16">Extend data model</span>
                                        <span className="m-b-0 text-muted font-size-13 d-block">European minnow priapumfish mosshead</span>
                                        </span>
                                    </label>
                                    </div>
                                </div>
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
  