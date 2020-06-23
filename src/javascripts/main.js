import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import 'bootstrap';
import '../styles/main.scss';
import auth from './components/auth/auth';
import myNav from './components/mynavbar/myNavBar';
import authData from './helpers/data/authData';

// on laod. if logged in
// show all mushrooms in the forest

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLogStatus();
  auth.loginBtn();
  myNav.logoutEvent();
};

init();
