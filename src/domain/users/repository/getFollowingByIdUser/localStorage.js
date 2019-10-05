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

function getFollowingByIdUser(id) {
  const followingIdList = localDatabase
    .favoriteUsers
    .filter((favoriteUser) => favoriteUser.idUser === id)
    .map((favoriteUser) => favoriteUser.idFavoriteUser);

  const userMap = buildUserMap();
  const followingList = [];

  followingIdList.forEach((idFollowing) => {
    const user = userMap[idFollowing];
    if (user) {
      followingList.push(user);
    }
  });

  return followingList;
}

module.exports = getFollowingByIdUser;
