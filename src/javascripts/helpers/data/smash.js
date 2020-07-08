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

const totallyRemoveShroomie = (mushroomId) => new Promise((resolve, reject) => {
  mushroomData.deleteMushroom(mushroomId)
    .then(() => {
      // get all mycoMushrooms with mushroomId
      mycologistMushroomsData.getMycoShroomsByShroomId(mushroomId).then((mycoShrooms) => {
        mycoShrooms.forEach((mycologistMushroom) => {
          mycologistMushroomsData.deleteMycoMushroom(mycologistMushroom.id);
        });
        resolve();
      });
      // delete each of tho mycoMushrooms
    })
    .catch((err) => reject(err));
});

const getMushroomWithOwners = () => new Promise((resolve, reject) => {
  mushroomData.getMushrooms()
  .then((allMushrooms) => {
    mycologistData.getMycologists().then((allMyc))
  })
})

export default { getSingleMycoWithShrooms, totallyRemoveShroomie };
