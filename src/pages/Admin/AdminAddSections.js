import React, { Component} from 'react';
const ls = require('local-storage')
const auth = require('../../axios/auth')


class AdminAddSection extends Component {
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
            <span className="breadcrumb-item active">Add Section</span>
          </nav>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h4>Add Sections</h4>
          <div className="m-t-25">
            <form>
              <div className="custom-file">
                <input type="file" className="custom-file-input" id="customFile" />
                <label className="custom-file-label" htmlFor="customFile">Choose file</label>
              </div>
              <button type="submit" className="m-t-30 btn btn-primary">Submit</button>
            </form>
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

export default AdminAddSection