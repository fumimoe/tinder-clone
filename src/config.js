/* eslint-disable */
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';

// require('dotenv').config({ debug: true });
require('dotenv').config()
const { REACT_APP_API_KEY } = process.env;
const { REACT_APP_AUTH_DOMAIN } = process.env
const { REACT_APP_DATABASE_URL } = process.env
const { REACT_APP_PROJECT_ID } = process.env
const { REACT_APP_STORAGE_BUCKET } = process.env
const { REACT_APP_MESSAGING_SENDER_ID } = process.env
const { REACT_APP_APP_ID } = process.env
const { REACT_APP_APP_MEASUREMENT_ID } = process.env

const firebaseConfig = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_APP_MEASUREMENT_ID
  });

  console.log(process.env.REACT_APP_API_KEY)
  console.log(process.env.REACT_APP_AUTH_DOMAIN)
  console.log(process.env.REACT_APP_DATABASE_URL)





export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const functions = firebase.functions();