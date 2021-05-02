const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Comment example one, test one, user one, post 1",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "Comment example one, test one, user two, post two",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "Comment example one, test one, user three, post three",
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
