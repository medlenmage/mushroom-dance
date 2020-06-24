import mushroomComponent from '../mushroom/mushroom';
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

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((mushrooms) => {
      console.warn('get mushrooms worked', mushrooms);
      let domString = `
        <h2 class=""text-center">Forest</h2>
        <div class="d-flex flex-wrap">
      `;

      mushrooms.forEach((mushroom) => {
        domString += mushroomComponent.mushroomMaker(mushroom);
      });

      domString += '</div>';

      dom.printToDom('#forest', domString);
      $('body').on('click', 'delete-shroom', removeShroomEvent);
    })
    .catch((err) => console.error('get mushrooms broke :(', err));
  // const domString = 'I See Mushrooms';
  // dom.printToDom('#forest', domString);
};

export default { buildForest };
