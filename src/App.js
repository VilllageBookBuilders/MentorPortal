import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import BaseRouter from './routes';
import 'antd/dist/antd.css';
import * as actions from './store/actions/auth';

import CustomLayout from './containers/Layout';

function App(props) {
  useEffect(() => {
    props.onTryAutoSignup();
    console.log(props);
  });
  return (
    <div className="App">
      <Router>
        <div>
          <CustomLayout {...props}>
            <BaseRouter />
          </CustomLayout>
        </div>
      </Router>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//if we didn't have map statetoprops, pass null in its place
