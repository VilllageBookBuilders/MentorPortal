import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import CustomLayout from './containers/Layout';
import ArticleList from './containers/ArticleListView';
import Article from './components/Article';


function App() {
  return (
    <div className="App">
        <CustomLayout>
          <ArticleList />
        </CustomLayout>
    </div>
  );
}

export default App;
