const asyncHandler = require("express-async-handler");

const renderPosts = asyncHandler(async (req, res) => {
  res.status(200).json({
    posts: [
      {
        title: "My First Post",
        description: "JWT Authentication Tutorial",
      },
    ],
  });
});

module.exports = { renderPosts };
