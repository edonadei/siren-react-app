import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from '@material-ui/icons/Home';

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">column one</div>
          <div className="col-6">
          <Home/>
          </div>
          
        </div>
      </div>

    </div>
  );
}

export default App;
