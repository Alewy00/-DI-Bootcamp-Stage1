const { db } = require("./config.js");
const knex = require("knex");
console.log(knex.transaction);

const getAllUser = () => {
  return db("user").select(
    "id",
    "email",
    "username",
    "first_name",
    "last_name"
  );
};

const login = async (username, pass) => {
  const user = await db("user")
    .select("id", "email", "username", "first_name", "last_name")
    .where({ username });

  if (!user) {
    return { status: 401, message: "No user found" };
  }

  const password = db("hashpwd").select("password").where({ username });

  if (pass === password) {
    return { status: 200, message: "No user found", user };
  }
};

const register = async (username, pass) => {
  try {
    const user = await knex.transaction(async (trx) => {
      db("user").insert({
        username,
        email,
        username,
        first_name,
        last_name,
      });
      await trx("hashpwd").insert({ username, pass });
      trx.commit();
      return user;
    });
  } catch (error) {
    console.error("Error adding user:", error.message);
  }
};

const updateUser = (email, username, first_name, last_name) => {
  return db("user")
    .update({ email, username, first_name, last_name }, [
      "id",
      "email",
      "username",
      "first_name",
      "last_name",
    ])
    .where({ id });
};

const getUser = (id) => {
  return db("user")
    .select("id", "email", "username", "first_name", "last_name")
    .where({ id });
};

module.exports = {
  getAllUser,
  getUser,
  login,
  updateUser,
  register,
};
