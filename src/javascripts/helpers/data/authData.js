import firebase from 'firebase/app';
import 'firebase/auth';

import mushList from '../../components/mushroomList/mushroomList';

const authDiv = $('#auth');
const forestDiv = $('#forest');
const logoutButton = $('#navbar-logout-button');

const checkLogStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      forestDiv.removeClass('hide');
      logoutButton.removeClass('hide');

      mushList.buildForest();
    } else {
      authDiv.removeClass('hide');
      forestDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
  // if the user is logged in: show mushrooms, hide login button, show logout button
  // else do the opposite
};

export default { checkLogStatus };
