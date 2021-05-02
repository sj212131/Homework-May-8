const { Post } = require("../models");

const postData = [
  {
    title: "Post example two, test two",
    content: "Post example two, test two, user one",
    user_id: 1,
  },
  {
    title: "Post example two, test two",
    content: "Post example two, test two, user two",
    user_id: 2,
  },
  {
    title: "Post example two, test two",
    content: "Post example two, test two, user three.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
