import React, { Component } from 'react';
import fire from '../config/fire';


class Dashboard extends Component {
  logout() {
    fire.auth().signOut();
  }

  render() {
    return(
      <div style={{textAlign: 'center'}}>
        
      <h1>Welcome Dashboard</h1>
      <button class="btn btn-danger" onClick = {this.logout}>Logout</button>
      
    </div>
    )
  }
}

export default Dashboard;
