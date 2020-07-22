import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../store/actions/auth';
import '../Style.css'
import logo from '../vbb-logo.png'

const Layout = (props) => {
    return(
        <div className="layout">
            <nav className="navbar" class="navbar sticky-top navbar-dark">
                <img src={logo} alt='Logo' style={{ width: "250px" }} />
                <a href='/'><h1 style={{ position: "relative", top: "27px" }}>Village Portal <sup> TM</sup></h1></a>
                <a class="btn btn-light donate-button" type="button" href="https://www.villagebookbuilders.org/giftabook/" style={{ position: "relative", top: "15px" }}>DONATE</a>
                <a class="btn btn-light signin-button" type="button" href="/login" style={{ position: "relative", top: "15px" }}>SIGN IN</a>
                {/* For Later - Only Show Sign In Button When User Is Logged Out
                {
                    props.isAuthenticated ?
                    {{! insert sign-in button line from above }} : <p></p>
                } */}
            </nav>
                <br />
            <div class="sidebar">
                <a class="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>

            <div className="site-layout-content">
                {props.children}
            </div>

            <footer style={{ textAlign: "center" }}>&copy; Village Book Builders  |  All Rights Reserved</footer>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Layout));