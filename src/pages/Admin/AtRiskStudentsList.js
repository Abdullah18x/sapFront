import React, { Component } from 'react';
const ls = require('local-storage')
const auth = require('../../axios/auth')
const admin = require('../../axios/admin')

class AtRiskStudents extends Component{
    state={
        adminId: ls.get('adminId'),
        userType: ls.get('userType'),
        token: ls.get('token'),
        loggedIn: true
      }

    verification = async () => {
        let verifyToken = await auth.verifyToken(this.state.adminId,this.state.userType,this.state.token)
        if(verifyToken.length === 0 ){
          this.setState({
            loggedIn:false
          })
          return
        }else{
          if(verifyToken.expired === 1){
            this.setState({
              loggedIn:false
            })
          }
          return
        }
      }

      componentDidMount(){
        if(this.state.adminId === null || this.state.adminId === undefined || this.state.userType === null || this.state.userType === undefined || this.state.token === null || this.state.token === undefined){
          this.setState({
            loggedIn:false
          })
          window.location.href='/error'
        }else{
          this.verification()
        }
        
      }

      isLoggedIn = () => {
        if(this.state.loggedIn){
          return(
            <div>
          <div className="main-content">
    <div className="page-header">
      <div className="header-sub-title">
        <nav className="breadcrumb breadcrumb-dash">
          <a href="#" className="breadcrumb-item"><i className="anticon anticon-home m-r-5" />Home</a>
          <a className="breadcrumb-item" href="#">Sections</a>
          <span className="breadcrumb-item active">View All Sections</span>
        </nav>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
        <h4>View All Sections</h4>
        <div className="m-t-25">
          <table id="data-table" className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Section</th>
                <th>Assigned Teachers</th>
                <th>Students</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              
            {/* {
                  this.state.sections.map((data, index) => {
                    return (
                      <SectionList 
                        key={index}
                        sectionId={data.sectionId}
                        section={data.section}
                        students='2'
                        lecturers='2'
                      />
                    )
                  })
                } */}
              
            </tbody>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>Section</th>
                <th>Students</th>
                <th>Subjects</th>
                <th>Action</th>
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
  {this.props.children}
        </div>
          )
        }else{
          window.location.href='/error'
        }
    
      }

      render() {
        return (
          <div className="page-container">
            {this.isLoggedIn()}
          </div>
      
      )
      }
}

export default AtRiskStudents