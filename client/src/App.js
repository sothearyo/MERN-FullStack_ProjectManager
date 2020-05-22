import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Router } from '@reach/router';
import IndexView from './views/IndexView';
import CreateView from './views/CreateView';
import DetailView from './views/DetailView';
import EditView from './views/EditView';

function App() {
  return (
    <div className="App">
      <h1>Project Manager</h1>
      <Router>
        <IndexView path="/"/>
        <CreateView path="new/" />
        <DetailView path=":id/" />
        <EditView path=":id/edit" />
      </Router>
    </div>
  );
}

export default App;
