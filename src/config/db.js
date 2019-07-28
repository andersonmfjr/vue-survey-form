import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyC5xjh9ZIwq7Z8Ud2X13jkL5K1FJdbPrf4',
  authDomain: 'survey-si.firebaseapp.com',
  databaseURL: 'https://survey-si.firebaseio.com',
  projectId: 'survey-si',
  storageBucket: '',
  messagingSenderId: '113225568490',
  appId: '1:113225568490:web:eefb512d16d19a74',
};

export const db = firebase.initializeApp(config).firestore();

const { TimeStamp, GeoPoint, FieldValue } = firebase.firestore;
export { TimeStamp, GeoPoint, FieldValue };
