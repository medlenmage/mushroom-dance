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

  $('body').on('mouseenter', '.myco-card', (e) => {
    e.target.closest('.card').classList.add('bg-dark');
  });
  $('body').on('mouseleave', '.myco-card', (e) => {
    e.target.closest('.card').classList.remove('bg-dark');
  });
};

init();
