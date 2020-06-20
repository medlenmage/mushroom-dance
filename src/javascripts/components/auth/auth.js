import firebase from 'firebase/app';
import 'firebase/auth';
import utils from '../../helpers/utils';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginBtn = () => {
  const domString = '<button id="google-auth" class="btn btn-warning"><i class="fab fa-google-plus"></i> LOG ME IN!!!</button>';
  utils.printToDom('#auth', domString);
  $('#google-auth').click(signMeIn);
};

export default { loginBtn };
