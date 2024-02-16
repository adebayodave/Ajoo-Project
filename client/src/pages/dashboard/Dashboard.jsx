import React from 'react'
import './dashboard.css'


const Dashboard = () => {
  return (
    <div>
        <div id="container">


<div id="left">
  <header>
    <h1 className="logo">A<span className="logo1">J</span><span className="logo3">O</span><span className="logo4">O</span></h1>
  </header>
  <hr/>

  <h5><img width="25" height="25" src="https://img.icons8.com/color/48/dashboard--v1.png" alt="dashboard--v1"/>
   Dashboard
  </h5>
  <h5><img width="25" height="25" src="https://img.icons8.com/color/48/000000/activity-history.png" alt="activity-history"/>History</h5>
  <h5 className="logout"><img width="25" height="25" src="https://img.icons8.com/color/48/exit.png" alt="exit"/>Logout</h5>


</div>




<div id="right">
  <div id="navbar">
  <div id="nav">
    <h1>Hi Durotola</h1>
    <h2 className="namecap">DD</h2>
  </div>

  <div className="Boxes">
    <div className="box1">
      <h3>Current date
        <input type="date"/>
      </h3>
    </div>
    <div className="box2"/>
      <h3>Due date
        <input type="date"/>
        </h3>
    </div>
    <div className="box3">
      <h3>Date of collection
        <input type="date"/>
        </h3>
    </div>



  </div>
  </div>


  <div id="total-package">
    <div className="total">
      <h2>Total Balance</h2>
      <h6># 200,000</h6>
    </div>
    <div className="package">
      <h2>Packsge</h2>
      <h6>You are on monthly package</h6>
    </div>
  </div>
  <div id="images">

  <img src="src/payment.png" alt=""/>
  <img src="src/payment2.png" alt=""/>
</div>






</div>





</div>
    
  )
}

export default Dashboard