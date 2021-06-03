import React, { Component } from "react";
import { Link } from "@reach/router";
const ls = require("local-storage");
const auth = require("../../axios/auth");
const lecturer = require("../../axios/lecturer");

class Feedback extends Component {
  state = {
    lecturerId: ls.get("teacherId"),
    userType: ls.get("userType"),
    token: ls.get("token"),
    feedbacks: [],
    title:'',
    details:'',
    loggedIn: true,
  };

  verification = async () => {
    let verifyToken = await auth.verifyToken(
      this.state.lecturerId,
      this.state.userType,
      this.state.token
    );
    if (verifyToken.length === 0) {
      this.setState({
        loggedIn: false,
      });
    } else {
      if (verifyToken.expired === 1) {
        this.setState({
          loggedIn: false,
        });
      }
    }
  };

  getFeedbacks = async () => {
    try {
      let feedbacks = await lecturer.getfeedbacks(this.state.token);
      console.log(feedbacks);
      this.setState({
        feedbacks: feedbacks,
      });
    } catch (error) {
      console.log(error);
    }
  };

  setTitle(e) {
      this.setState({
          title:e.target.value
      })
  }

  setDetails(e) {
    this.setState({
        details:e.target.value
    })
}

  // removeFromSection = async (studentId) => {
  //   try {
  //     let toRemove = await lecturer.removeStudentFromSection(studentId, this.state.token)
  //     this.getTeacherSudents()
  //   } catch (error) {
  //     console.log(error)
  //   }

  // }

  componentDidMount() {
    if (
      this.state.lecturerId === null ||
      this.state.lecturerId === undefined ||
      this.state.userType === null ||
      this.state.userType === undefined ||
      this.state.token === null ||
      this.state.token === undefined
    ) {
      this.setState({
        loggedIn: false,
      });
      window.location.href = "/error";
    } else {
      this.verification();
    }
    if (this.state.loggedIn) {
      this.getFeedbacks();
    }
  }

  isLoggedIn = () => {
    if (this.state.loggedIn) {
      return (
        <div>
          <div className="main-content">
            <div
              class="modal fade"
              id="feedback"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Add Feedback
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div className="form-group">
                      <label
                        className="font-weight-semibold"
                        htmlFor="userName"
                      >
                        Title:
                      </label>
                      <div className="input-affix">
                        <i className="prefix-icon anticon anticon-user" />
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          placeholder="title"
                          onChange={(e) => this.setTitle(e)}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <label htmlFor="inputEmail4">Description</label>
                        <textarea
                          className="form-control"
                          id="description"
                          placeholder="Details"
                          onChange={(e) => {
                            this.setDetails(e);
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-header">
              <div className="header-sub-title">
                <nav className="breadcrumb breadcrumb-dash">
                  <a href="#" className="breadcrumb-item">
                    <i className="anticon anticon-home m-r-5" />
                    Home
                  </a>
                  <a className="breadcrumb-item" href="#">
                    Sections
                  </a>
                  <span className="breadcrumb-item active">
                    View All Students
                  </span>
                </nav>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-9">
                      <h4>Feedbacks</h4>
                      <h6>
                        State any issue regarding the software and we will see
                        to it
                      </h6>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <div className="d-flex align-items-center justify-content-between">
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-toggle="modal"
                            data-target="#feedback"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="m-t-25">
                    <table id="data-table" className="table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Title</th>
                          <th>Critical</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.feedbacks.map((data, index) => {
                          let AtRisk = "Not At Risk";
                          if (data.atRisk === 1) {
                            AtRisk = " At Risk";
                          }
                          return (
                            <tr key={index}>
                              <td>{data.fbId}</td>
                              <td>{data.title}</td>
                              <td>{data.critical}</td>
                              <td>
                                <div className="dropdown dropdown-animated scale-left">
                                  <a
                                    className="text-gray font-size-18"
                                    href="javascript:void(0);"
                                    data-toggle="dropdown"
                                  >
                                    <i className="anticon anticon-ellipsis" />
                                  </a>
                                  <div className="dropdown-menu">
                                    <Link
                                      className="dropdown-item"
                                      to="/teacher/viewFeedback"
                                      state={{
                                        fbId: data.fbId,
                                      }}
                                    >
                                      <i className="anticon anticon-eye" />
                                      <span className="m-l-10">View</span>
                                    </Link>
                                    {/* <button onClick={()=>{this.removeFromSection(data.studentId)}} className="dropdown-item" type="button">
                                                <i className="anticon anticon-delete" />
                                                <span className="m-l-10">Remove from Section</span>
                                              </button> */}
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>ID</th>
                          <th>Title</th>
                          <th>Critical</th>
                          <th>Action</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {this.props.children}
          <footer className="footer">
            <div className="footer-content">
              <p className="m-b-0">
                Copyright © 2020 COMSATS University. All rights reserved.
              </p>
              <span></span>
            </div>
          </footer>
        </div>
      );
    } else {
      window.location.href = "/error";
    }
  };

  render() {
    return <div className="page-container">{this.isLoggedIn()}</div>;
  }
}

export default Feedback;
