const { User } = require("../models");

const userData = [
  {
    username: "tony_stark",
    twitter: "tony_stark",
    github: "tony_stark",
    email: "tony_stark@gmail.com",
    password: "ts123456",
  },
  {
    username: "steve_rogers",
    twitter: "steve_rogers",
    github: "steve_rogers",
    email: "steve_rogers@gmail.com",
    password: "sr123456",
  },
  {
    username: "natasha_romanova",
    twitter: "natasha_romanova",
    github: "natasha_romanova",
    email: "natasha_romanova@gmail.com",
    password: "nr123456",
  },
  {
    username: "stephen_strange",
    twitter: "stephen_strange",
    github: "stephen_strange",
    email: "stephen_strange@gmail.com",
    password: "ss123456",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
