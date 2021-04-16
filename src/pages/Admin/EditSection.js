import React, { Component} from 'react';
import {Link } from "@reach/router";
var ls = require('local-storage');
const auth = require('../../axios/auth')
const admin = require('../../axios/admin')

class EditSection extends Component{
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
        }else{
          if(verifyToken[0].expired === 1){
            this.setState({
              loggedIn:false
            })
          }
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
        if(this.state.loggedIn){
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
                        <span className="breadcrumb-item active">Edit Section</span>
                        </nav>
                    </div>
                    </div>
                    <input type="text" className="form-control" id="userName" value='FA' />
                </div>
            {this.props.children}
            </div>
          )
        }
        else{
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

export default EditSection