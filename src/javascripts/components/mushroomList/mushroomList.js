import mushroomComponent from '../mushroom/mushroom';
import dom from '../../helpers/utils';
import mushroomData from '../../helpers/data/mushroomData';

// get all mushrooms
// loop and create a domstring
// print to dom

const removeShroomEvent = (e) => {
  const mushroomId = e.target.closest('.card').id;
  mushroomData.deleteMushroom(mushroomId)
    .then((response) => {
      console.warn('response?', response);
    })
    .catach((err) => console.error('could not delete mushroom', err));
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
