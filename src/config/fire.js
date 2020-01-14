import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCRa7ysUsvX5zFUd3gjucQR3tmdlaFqkn4",
  authDomain: "sdplus-7e9e9.firebaseapp.com",
  databaseURL: "https://sdplus-7e9e9.firebaseio.com",
  projectId: "sdplus-7e9e9",
  storageBucket: "sdplus-7e9e9.appspot.com",
  messagingSenderId: "940776300372",
  appId: "1:940776300372:web:c08ae18f3d6017bef772c1",
  measurementId: "G-265Q27K67Q"
};

const fire = firebase.initializeApp(config);
export default fire;