import React, { Component} from 'react';
    import { Link } from "@reach/router";
    const ls = require('local-storage')
    const auth = require('../../axios/auth')
    const lecturer = require('../../axios/lecturer')
    
    class TeacherAssignments extends Component{
      state={
        lecturerId: ls.get('teacherId'),
        userType: ls.get('userType'),
        token: ls.get('token'),
        assignments:[],
        option:1,
        loggedIn: true
      }
    
      verification = async () => {
        let verifyToken = await auth.verifyToken(this.state.lecturerId,this.state.userType,this.state.token)
        if(verifyToken.length === 0 ){
          this.setState({
            loggedIn:false
          })
        }else{
          if(verifyToken.expired === 1){
            this.setState({
              loggedIn:false
            })
          }
        }
      }

      setAssignments = async () => {
        try {
          let returnedAssignments = await lecturer.getAssignments(this.state.lecturerId, this.state.token)
          this.setState({
            assignments:returnedAssignments
          })
        } catch (error) {
          console.log(error)
        }
      }

      setDataSets = async () => {
        try {
          let returnedDataSets = await lecturer.getDataSets( this.state.token)
          this.setState({
            assignments:returnedDataSets
          })
        } catch (error) {
          console.log(error)
        }
      }

      changeAssignments = async (e) => {
        if (e.target.value === 'assignments') {
          this.setState({
            option:1
          })
          this.setAssignments()
        }else{
          this.setState({
            option:0
          })
          this.setDataSets()
          //alert('here2')
        }

        

        // try {
        //   let returnedAssignments = await lecturer.getAssignments(this.state.lecturerId, this.state.token)
        //   this.setState({
        //     assignments:returnedAssignments
        //   })
        // } catch (error) {
        //   console.log(error)
        // }
      }


      delete = async (assignmentId) =>{
        try {
          let deleteAssignment = await lecturer.deleteAssignment(assignmentId, this.state.token)
          this.setAssignments()
        } catch (error) {
          console.log(error)
        }
      }

      renderAssignments(){
        return(
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Total Marks</th>
                  <th>Status</th>
                  <th>Action</th>
                  
                </tr>
              </thead>
              <tbody>
              {
                this.state.assignments.map((data, index) => {
                  let status = 'Not Assigned'
                  if (data) {
                    if (data.status === 1) {
                      status = 'Assigned'
                    }
                  }
                  return (
                    <tr key={index}>
                      <td>{data.assignmentId}</td>
                      <td>{data.title}</td>
                      <td>{data.totalMarks}</td>
                      <td>{status}</td>
                      <td>
                        <div className="dropdown dropdown-animated scale-left">
                            <a className="text-gray font-size-18" href="javascript:void(0);" data-toggle="dropdown">
                            <i className="anticon anticon-ellipsis" />
                            </a>
                            <div className="dropdown-menu">
                            <Link 
                                className="dropdown-item"
                                to='/teacher/viewAssignment'
                                state={{
                                    assignmentId:data.assignmentId
                                }}
                                >
                                <i className="anticon anticon-eye" />
                                <span className="m-l-10">View Assignment</span>
                            </Link>
                            
                            <Link 
                                className="dropdown-item"
                                to='/teacher/updateAssignment'
                                state={{
                                  assignmentId:data.assignmentId
                                }}
                                >
                                <i className="anticon anticon-eye" />
                                <span className="m-l-10">Update</span>
                            </Link>
                            <button type="button" class="dropdown-item" data-toggle="modal" data-target="#exampleModal" onClick={() => {this.assignAssignment(data.assignmentId)}}>
                            <i className="anticon anticon-delete" />
                              <span className="m-l-10">Assign</span> 
                            </button>
                            <button onClick={() => {this.delete(data.assignmentId)}} className="dropdown-item" type="button">
                              <i className="anticon anticon-delete" />
                              <span className="m-l-10">Delete</span>
                            </button>
                            
                            </div>
                        </div>
                        </td>
                    </tr>
                  )
                })
              }
                
              </tbody>
            </table>
          </div>
        )
      }
      renderDataSets() {
        return(
          <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Total Marks</th>
                    <th>Subject</th>
                    <th>Action</th>
                    
                  </tr>
                </thead>
                <tbody>
                {
                  this.state.assignments.map((data, index) => {
                    
                    return (
                      <tr key={index}>
                        <td>{data.datasetId}</td>
                        <td>{data.title}</td>
                        <td>{data.totalMarks}</td>
                        <td>{data.subject}</td>
                        <td>
                          <div className="dropdown dropdown-animated scale-left">
                              <a className="text-gray font-size-18" href="javascript:void(0);" data-toggle="dropdown">
                              <i className="anticon anticon-ellipsis" />
                              </a>
                              <div className="dropdown-menu">
                              <Link 
                                  className="dropdown-item"
                                  to='/teacher/viewAssignment'
                                  state={{
                                      assignmentId:data.assignmentId
                                  }}
                                  >
                                  <i className="anticon anticon-eye" />
                                  <span className="m-l-10">View Assignment</span>
                              </Link>
                              
                              <Link 
                                  className="dropdown-item"
                                  to='/teacher/updateAssignment'
                                  state={{
                                    assignmentId:data.assignmentId
                                  }}
                                  >
                                  <i className="anticon anticon-eye" />
                                  <span className="m-l-10">Update</span>
                              </Link>
                              <button onClick={() => {this.delete(data.assignmentId)}} className="dropdown-item" type="button">
                                <i className="anticon anticon-delete" />
                                <span className="m-l-10">Delete</span>
                              </button>
                              
                              </div>
                          </div>
                          </td>
                      </tr>
                    )
                  })
                }
                  
                </tbody>
              </table>
            </div>
        )
      }
    
      componentDidMount(){
        if(this.state.lecturerId === null || this.state.lecturerId === undefined || this.state.userType === null || this.state.userType === undefined || this.state.token === null || this.state.token === undefined){
          this.setState({
            loggedIn:false
          })
          window.location.href='/error'
        }else{
          this.verification()
        }
        if(this.state.loggedIn){
          this.setAssignments()
        }
        
      }
    
      isLoggedIn = () => {
        
        if(this.state.loggedIn){
          return (
            <div>
              <div className="main-content">
              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      ...
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page-header">
              <div className="header-sub-title">
                <nav className="breadcrumb breadcrumb-dash">
                <a href="#" className="breadcrumb-item"><i className="anticon anticon-home m-r-5" />Home</a>
                <a className="breadcrumb-item" href="#">Sections</a>
                <span className="breadcrumb-item active">View All Assignments</span>
                </nav>
              </div>
                <div className="container-fluid">
                  <div className="card" id="list-view">
                    <div className="card-body">
                      <div className='row'>
                        <div className='col-md-8'>
                        <h4>View All Assignments</h4>
                        </div>
                        <div className='col-md-4'>
                                <select id="inputState" className="form-control" onChange={(e) => {this.changeAssignments(e)}}>
                                    <option value="assignments" selected>Assignments</option>
                                    <option value="dataSets">Data Sets</option>
                                </select>
                        </div>
                      
                      </div>
                    { this.state.option ? this.renderAssignments() : this.renderDataSets()

                    }
                      
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
                   
                {this.props.children}
                </div>
          )
      }else{
        window.location.href='/error'
      }
    }
    
      render(){
        return(
          <div className="page-container">
            {this.isLoggedIn()}
    </div>
        )
      }
    }
    
    export default TeacherAssignments