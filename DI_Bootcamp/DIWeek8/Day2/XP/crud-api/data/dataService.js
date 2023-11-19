let axios = require("axios");

const fetchPosts = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

    return res.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    throw error;
  }
};

module.exports = { fetchPosts };
