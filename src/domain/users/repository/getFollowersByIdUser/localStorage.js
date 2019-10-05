const { localDatabase } = require('@UserMocks/data/');

function buildUserMap() {
  return localDatabase
    .users
    .reduce((map, user) => (
      {
        ...map,
        [user.id]: user,
      }
    ), {});
}

function getFollowersByIdUser(id) {
  const followerIdList = localDatabase
    .favoriteUsers
    .filter((favoriteUser) => favoriteUser.idFavoriteUser === id)
    .map((favoriteUser) => favoriteUser.idUser);

  const userMap = buildUserMap();
  const followerList = [];

  followerIdList.forEach((idFollower) => {
    const user = userMap[idFollower];
    if (user) {
      followerList.push(user);
    }
  });

  return followerList;
}

module.exports = getFollowersByIdUser;
