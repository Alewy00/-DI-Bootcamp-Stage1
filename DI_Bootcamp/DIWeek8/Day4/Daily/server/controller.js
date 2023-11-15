module.exports = {
  getAllUser,
  getUser,
  login,
  updateUser,
  register,
} = require("./model.js");

const _getAllUsers = async (req, res) => {
  try {
    const data = await getAllUser();
    res.json(data);
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "No users" });
  }
};

const _register = async (req, res) => {
  try {
    const { username } = req.body.username;
    const { pass } = req.body.pass;
    const user = await register(username, pass);
    res.json(user);
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "cant create user" });
  }
};

const _login = async (req, res) => {
  try {
    const { username } = req.body.username;
    const { pass } = req.body.pass;
    const user = await _login(username, pass);
    res.json(user);
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "Can not login" });
  }
};

const _getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await this.getUser(id);
    res.json(user);
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "Cant find user" });
  }
};

const _updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, username, first_name, last_nam } = req.body;
  try {
    const data = await updateUser(id, email, username, first_name, last_nam);
    res.json(data);
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "No update" });
  }
};

module.exports = {
  _login,
  _getUser,
  _getAllUsers,
  _updateUser,
  _register,
};
