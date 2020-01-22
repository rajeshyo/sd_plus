import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer } from 'react-mdl';
// import Main from './components/main';
import { Link } from 'react-router-dom';
import Landingpage from './components/landingpage';
import Dashboard from './components/dashboard';
import fire from './config/fire';
// import Register from './components/register';

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
      <div className="demo-big-content" >
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">SD Plus</Link>} scroll>
            <Navigation>
                {/* <Link to="/resume">Resume</Link> */}
                {/* <Link to="/aboutme">About Me</Link> */}
                {/* <Link to="/projects">Projects</Link> */}
                {/* <Link to="/dashboard">Dashboard</Link> */}
                {/* <Link to="/register">Register</Link> */}
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Sd Plus</Link>}>
            <Navigation>
              {/* <Link to="/resume">Resume</Link> */}
              {/* <Link to="/aboutme">About Me</Link> */}
              {/* <Link to="/projects">Projects</Link> */}
              <Link to="/dashboard">Dashboard</Link>
              {/* <Link to="/register">Register</Link> */}

            </Navigation>
        </Drawer>
        {/* <Content> */}
            <div className="page-content" />
            { this.state.user ? ( <Dashboard /> ) : ( <Landingpage /> ) }
            {/* <Main/> */}
        {/* </Content> */}
    </Layout>
</div>

    );
  }
}

export default App;
