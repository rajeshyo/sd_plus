import React, { Component } from 'react';
import { Textfield,  Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Link } from 'react-router-dom';


class Register extends Component {
  render() {
    return(
      <div>

<Card shadow={0} style={{width: '512px', margin: 'auto',marginTop: '100px'}}>
<CardTitle style={{color: 'black', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}></CardTitle>
    <CardText>
    <Textfield
    onChange={() => {}}
    label="First Name"
    floatingLabel
    style={{width: '200px', margin:'20px'}}
/>
<Textfield
    onChange={() => {}}
    label="Last Name"
    floatingLabel
    style={{width: '200px'}}
/>
<Textfield
    onChange={() => {}}
    label="Username"
    floatingLabel
    style={{width: '200px', margin:'20px'}}
/>
<Textfield
    onChange={() => {}}
    label="Password"
    floatingLabel
    style={{width: '200px'}}
/>
    </CardText>
    <CardActions border>
    
    <Link to="/"><Button raised colored style={{marginLeft: '20px'}}>Login</Button></Link>
    <Link to="/register"><Button raised colored style={{marginLeft: '20px'}}>Register</Button></Link>

    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>

  </div>
    )
  }
}

export default Register;
