import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import 'bootstrap';
import '../styles/main.scss';
import auth from './components/auth/auth';
import myNav from './components/mynavbar/myNavBar';
import authData from './helpers/data/authData';

/**
 * Be able to login to our app
 * be able to logout
 * see a login button if logged out
 * see a logout button if logged in
 * see a list of mushrooms if we are logged in
 */

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLogStatus();
  auth.loginBtn();
  myNav.logoutEvent();
};

init();
