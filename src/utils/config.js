//TODO: DONE add firebase configuration and export it
export const firebaseConfig = {
  //TODO: ADD YOUR FIREBASE INFO HERE

  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "reactbootcamp-c6384.firebaseapp.com",
  databaseURL: "https://reactbootcamp-c6384-default-rtdb.firebaseio.com",
  projectId: "reactbootcamp-c6384",
  storageBucket: "reactbootcamp-c6384.appspot.com",
  messagingSenderId: "587732803",
  appId: "1:587732803:web:8cab551cce0d93efbe81f6",
  measurementId: "G-J2314CRNX6"
};
//image configuration
export const imageConfig = {
  quality: 0.2,
  maxWidth: 800,
  maxHeight: 600,
  autoRotate: true
};
