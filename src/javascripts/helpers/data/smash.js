import mycologistData from './mycologistData';
import mycologistMushroomsData from './mycologistListMushroomData';
import mushroomData from './mushroomData';
// get the mycologist who's id is mycologistId
// get all of their mycologistMushrooms using the mycologist.uid
// get all of the muchrooms
// add the mycologists owned mushrooms to mycologist.mushrooms[]

const getSingleMycoWithShrooms = (mycologistId) => new Promise((resolve, reject) => {
  mycologistData.getMycologistById(mycologistId)
    .then((response) => {
      const mycologist = response.data;
      mycologist.id = mycologistId;
      mycologist.mushrooms = [];
      mycologistMushroomsData.getMycoShroomsByMycoUid(mycologist.uid).then((mycoShrooms) => {
        mushroomData.getMushrooms().then((allMushrooms) => {
          mycoShrooms.forEach((mycoShroom) => {
            const mushroom = allMushrooms.find((m) => m.id === mycoShroom.mushroomsId);
            mycologist.mushrooms.push(mushroom);
          });
          resolve(mycologist);
        });
      });
    })
    .catch((err) => reject(err));
});

export default { getSingleMycoWithShrooms };
