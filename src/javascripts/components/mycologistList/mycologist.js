import mycologistComponent from '../mycologists/mycologists';
import dom from '../../helpers/utils';
import mycologistData from '../../helpers/data/mycologistData';

const buildAcademy = () => {
  mycologistData.getMycologists()
    .then((mycologist) => {
      console.warn('get mycologists worked', mycologist);
      let domString = `
        <h2 class=""text-center">Academy</h2>
        <div class="d-flex flex-wrap">
      `;

      mycologist.forEach((mycologists) => {
        domString += mycologistComponent.mycologistMaker(mycologists);
      });

      domString += '</div>';

      dom.printToDom('#academy', domString);
    })
    .catch((err) => console.error('get mushrooms broke :(', err));
  // const domString = 'I See Mushrooms';
  // dom.printToDom('#forest', domString);
};

export default { buildAcademy };
