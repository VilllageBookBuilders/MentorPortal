import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import 'antd/dist/antd.css';

import CustomLayout from './containers/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <CustomLayout>
            <BaseRouter />
          </CustomLayout>
        </div>
      </Router>

    </div>
  );
}

export default App;
