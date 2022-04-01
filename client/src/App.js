import React, { Fragment } from "react"
import './App.css';

const App = () =>{
  return(
    <Fragment>
      <div className="container">
        <p>Internacional UAI</p>
        <form action="../../" method="post" className="form">
          <button type="submit">Connected?</button>
        </form>
      </div>
    </Fragment>
  )
}



export default App;
