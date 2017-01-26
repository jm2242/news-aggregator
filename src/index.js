import * as firebase from 'firebase'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'


// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDOuP2Ct4V6K-OgR-YgmwwvGJl2S1jZTGs',
  authDomain: 'news-aggregator-33907.firebaseapp.com',
  databaseURL: 'https://news-aggregator-33907.firebaseio.com',
  storageBucket: 'news-aggregator-33907.appspot.com',
  messagingSenderId: '991024898462'
}

firebase.initializeApp(config)

ReactDOM.render(
  <App />,

  document.getElementById('root')
);
