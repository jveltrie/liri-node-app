<<<<<<< HEAD
console.log('API KEYS ARE LOADED');

exports.spotify = {
  id: "fbdfba44af7844bfb92d318f3d986065",
  secret: "3f103d07caad4819aa55b1d23ec07eae"
};

exports.omdb = {
    id: "trilogy"
};

exports.bandsInTownAPI = {
    id: "https://rest.bandsintown.com/artists/events?app_id=codingbootcamp"
  };
  
=======
console.log('API KEYS ARE LOADED');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
>>>>>>> 2b3fc5753449c705ae46619ac8f10df0c3a2f062
