import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import hope_books from '../hope_books.png'


export class SigninGoogle extends Component {

  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  }

  render() {
    return (
      <div style={{textAlign: "center"}}>
        <br/>
        <img src={hope_books} alt='Pic' style={{ width: "30%", float: "right", marginRight: "50px" }} />

        <div className="SigninBox" style={{ minWidth: "70%" }}>
          <h3>Please use your villagementors.org account<br/>to sign in below:</h3>
          <br/>
          <GoogleLogin
          style={{ width: "50%"}}
          clientId="711431548719-lpoc2lbr4bmruqo7d9emua5huvpsvqgk.apps.googleusercontent.com"
          buttonText="Sign in with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
          />
          <br/>
          <br/>
          <br/>
          <p style={{ paddingLeft: "0px"}}>Don't have an account with us yet?</p>
          <h6><a href="/signup">Click here</a> to sign up to be a mentor!</h6>
        </div>
      </div>
    )
  }
}

export default SigninGoogle