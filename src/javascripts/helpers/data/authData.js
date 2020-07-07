import firebase from 'firebase/app';
import 'firebase/auth';
import academy from '../../components/mycologistList/mycologist';
import mushList from '../../components/mushroomList/mushroomList';

const authDiv = $('#auth');
const forestDiv = $('#forest');
const logoutButton = $('#navbar-logout-button');
const singleMycoDiv = $('#single-myco');
const academyDiv = $('#academy');
const newShroomDiv = $('#new-shroom');

const checkLogStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      forestDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      academyDiv.removeClass('hide');
      singleMycoDiv.removeClass('hide');
      newShroomDiv.removeClass('.hide');
      academy.buildAcademy();
      mushList.buildForest();
    } else {
      authDiv.removeClass('hide');
      forestDiv.addClass('hide');
      logoutButton.addClass('hide');
      singleMycoDiv.addClass('hide');
      academyDiv.addClass('hide');
      newShroomDiv.addClass('.hide');
    }
  });
  // if the user is logged in: show mushrooms, hide login button, show logout button
  // else do the opposite
};

export default { checkLogStatus };
