import React, { Component } from 'react';
import fire from './config/fire'
import Login from './Login.js';
import Home from './Home.js';
import Navbar from './navbar';
import Footer from './footer';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        { this.state.user ? ( <Home /> ) : ( <Login /> ) }
        <br />
        <Footer style={{marginTop: '10px'}} />
      </div>
    );
  }
}

export default App;
