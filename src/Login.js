import React from 'react';
import fire from './config/fire';
class Login extends React.Component {

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
    return (
      
      <div style={{ textAlign: 'center' }}>
        
{/* <div class="card">
<div class="card-body">
<div class="form-group">
<label for="exampleInputEmail1">Email address</label>
    <input align="center" id="email" placeholder="Enter Email.." type="text" class="form-control" aria-describedby="emailHelp" style={{width: '30%'}}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input id="password" placeholder="Enter Password.." class="form-control" style={{width: '30%'}} />
 </div>
    <button type="submit" class="btn btn-primary" onClick={this.login}>Login</button> &nbsp;
    <button type="submit" class="btn btn-primary" onClick={this.signUp}>Sign Up</button>
  </div>
    </div> */}


<div class="card" style={{width: '30%', marginTop: '15%', marginLeft: '30%'}}>
<div class="card-body">
    <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" id="email" placeholder="Enter Email" />
    </div>
    <div class="col">
      <input type="text" class="form-control" id="password" placeholder="Enter Password" />
    </div>
    </div> <br></br>
    <button type="submit" class="btn btn-primary" onClick={this.login}>Login</button> &nbsp;
    <button type="submit" class="btn btn-primary" onClick={this.signUp}>Sign Up</button>
    </div>
    </div>

        {/* <div>
          <div>Email</div>
          <input id="email" placeholder="Enter Email.." type="text"/>
        </div>
        <div>
          <div>Password</div>
          <input id="password" placeholder="Enter Password.." type="text"/>
        </div>
        <button style={{margin: '10px'}} onClick={this.login}>Login</button>
        <button style={{margin: '10px'}} onClick={this.signUp}>Sign Up</button> */}
 
      </div>
    )
  }
}

export default Login;