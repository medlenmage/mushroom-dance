// import dom from '../../helpers/utils';
import mushroomData from '../../helpers/data/mushroomData';

// get all mushrooms
// loop and create a domstring
// print to dom

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((response) => console.warn('get mushrooms worked', response.data))
    .catch((err) => console.error('get mushrooms broke :(', err));
  // const domString = 'I See Mushrooms';
  // dom.printToDom('#forest', domString);
};

export default { buildForest };
