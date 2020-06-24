import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getMushrooms = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/mushrooms.json`)
    .then((response) => {
      const mushroomObjects = response.data;
      const mushrooms = [];
      Object.keys(mushroomObjects).forEach((mushroomId) => {
        // add the id onto each object
        mushroomObjects[mushroomId].id = mushroomId;
        mushrooms.push(mushroomObjects[mushroomId]);
        // put object onto mushroom array
      });
      // take the response
      // format into an array of objects
      // adding the id onto each object
      // resolve the new array of objects
      resolve(mushrooms);
    })
    .catch((err) => reject(err));
});

const deleteMushroom = (mushroomId) => axios.delete(`${baseUrl}/mushrooms/${mushroomId}.json`);

export default { getMushrooms, deleteMushroom };
