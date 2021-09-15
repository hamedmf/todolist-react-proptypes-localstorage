import React, { useState } from "react";
import Ul from "./component/Ul";
import "./App.css";
import "./style.css";

function App() {
  return(
     
       

    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card px-3">
              <div className="card-body">
                <h4 className="card-title">Awesome Todo list</h4>
                <Ul />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
