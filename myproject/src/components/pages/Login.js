import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupForm from '../component/SignupForm';
import NavBar from '../nav/NavBar';
import {userSignupRequest} from '../actions/signupActions';

class Login extends Component {
  render() {
    //console.log("login");
    const{ userSignupRequest} = this.props;
    return (
      <div>
        <NavBar />
          <div className ="row">
            <div className="col-md-4 col-md-offset-4">
              <SignupForm userSignupRequest={userSignupRequest}/>
            </div>
          </div>
    </div>
    );
  }
}

Login.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(Login);
