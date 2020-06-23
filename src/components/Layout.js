import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../store/actions/auth';
import '../Style.css'
import logo from '../vbb-logo.png'

const Layout = (props) => {
    return(
        <body style={{backgroundColor: "#fffff6" }}>
            <div>
                <img src={logo} alt='Logo' style={{width: "300px", padding: "20px" }} />
                <h1 style={{ display: "inline-block", paddingLeft: "100px", position: "relative", top:"30px" }}>Mentor Portal</h1>
                <a href="https://www.villagebookbuilders.org/giftabook/" style={{ display: "inline-block", paddingLeft: "100px", position: "relative", top:"27px" }}><button>Donate</button></a>
                {
                    props.isAuthenticated ?
                    <a href="/login" style={{ display: "inline-block", paddingLeft: "100px" }}><button>Sign Out</button></a> : <p style={{ display: "inline-block", position: "relative", top:"27px" }}></p>
                }
                <br />
                <hr className="nav-bar-line" />
                <br />
            </div>

            <div className="site-layout-content">
                {props.children}
            </div>

            <footer style={{textAlign: 'center' }}>&copy; Village Book Builders  |  All Rights Reserved</footer>
        </body>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Layout));