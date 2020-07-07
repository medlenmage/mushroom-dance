import mushroomComponent from '../mushroom/mushroom';
import newMushroom from '../newMushroom/newMushroom';
import smash from '../../helpers/data/smash';
import dom from '../../helpers/utils';
import mushroomData from '../../helpers/data/mushroomData';

// get all mushrooms
// loop and create a domstring
// print to dom

const removeShroomEvent = (e) => {
  const mushroomId = e.target.closest('.card').id;
  console.warn(mushroomId);
  // actually delete this mushroom from firebase
  smash.totallyRemoveShroomie(mushroomId)
    .then(() => {
      // reprint the dom (so the lil shroomie goes away)
      // eslint-disable-next-line no-use-before-define
      buildForest();
      dom.printToDom('#single-myco', '');
    })
    .catch((err) => console.error('could not delete mushroom', err));
};

const addShroomEvent = (e) => {
  e.preventDefault();

  const newMush = {
    name: $('#mush-name').val(),
    size: $('#mush-size').val(),
    location: $('#mush-location').val(),
    weight: $('#mush-weight').val(),
  };

  mushroomData.addMushroom(newMush)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildForest();
      dom.printToDom('#new-shroom', '');
    })
    .catch((err) => console.error('could not add mushroom', err));
};

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((mushrooms) => {
      console.warn('get mushrooms worked', mushrooms);
      let domString = `
        <h2 class=""text-center">Forest</h2>
        <button class="btn btn-success" id="show-add-mush"><i class="fas fa-ad"></i> New Shroom</button>
        <div class="d-flex flex-wrap">
      `;

      mushrooms.forEach((mushroom) => {
        domString += mushroomComponent.mushroomMaker(mushroom);
      });

      domString += '</div>';

      dom.printToDom('#forest', domString);
      $('body').on('click', 'delete-shroom', removeShroomEvent);
      $('body').on('click', '#mush-creator', addShroomEvent);
      $('body').on('click', '#show-add-mush', newMushroom.showForm);
    })
    .catch((err) => console.error('get mushrooms broke :(', err));
  // const domString = 'I See Mushrooms';
  // dom.printToDom('#forest', domString);
};

// mushroomData.addMushroom(newMush);

export default { buildForest };
