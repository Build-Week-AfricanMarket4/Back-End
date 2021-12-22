const bcrypt = require("bcryptjs");

function hashUser(username, password, firstName, lastName, businessName, jobTitle, location, avatarImg) {
  let user = {
    username: username,
    firstName: firstName,
    lastName: lastName,
    businessName: businessName,
    jobTitle: jobTitle,
    location: location,
    avatarImg: avatarImg,
    password: password
  };
  const rounds = process.env.BCRYPT_ROUNDS || 8;
  const hash = bcrypt.hashSync(user.password, rounds);
  user.password = hash;

  return user;
}



exports.seed = async function (knex, Promise) {
  return await knex("users").insert([
    hashUser("Logan123", "James", 'Howlett', 'Patches, Inc', 'Chief of Operations', 'Burma', 'https://media.istockphoto.com/photos/cheerful-fashionable-adult-man-in-city-setting-picture-id1310533180?b=1&k=20&m=1310533180&s=170667a&w=0&h=EdRuvIkrMifhyZJkHXf5Pk68ri44_g7OFnU8lIdbc-c=', 'lambda'),
  ]);
};