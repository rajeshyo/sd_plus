import React, { Component } from 'react';
import { Textfield, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
// import { Link } from 'react-router-dom';
import fire from '../config/fire';


class Landing extends Component {


  signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  render() {
    return(
      <div >

<Card shadow={0} style={{width: '512px', margin: 'auto',marginTop: '100px'}}>
    <CardTitle style={{ height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}> 
    
    </CardTitle>
    {/* <img src="img/google.png" style={{width: '20px', height: '20px'}}></img>
    <img src="img/facebook.png" style={{width: '20px', height: '20px'}}></img> */}
    <CardText>
    <Textfield
    // onChange={() => {}}
    id="email"
    label="Username"
    floatingLabel
    style={{width: '200px', margin:'12px'}}
/>
<Textfield
    // onChange={() => {}}
    id="password"
    label="Password"
    floatingLabel
    style={{width: '200px'}}
/>
    </CardText>
    <CardActions border>
    <Button raised colored style={{marginLeft: '20px'}} onClick={this.login} type="submit">Login</Button>
    <Button raised colored style={{marginLeft: '20px'}} onClick={this.signUp}>Register</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>


  </div>
    )
  }
}

export default Landing;
