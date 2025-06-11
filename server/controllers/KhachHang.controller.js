const khachHangService = require("../services/KhachHang.service");

const getUsers = async (req, res) => {
  try {
    const result = await khachHangService.getAllUsers();
    res.json({
      MESSAGE: "GET ALL USERS",
      ERROR: true,
      SUCCESS: false,
      DATA: result,
    });
  } catch (error) {
    next(error);
  }
};

const addUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await khachHangService.createUser({ name, email });
    res.status(201).json({
      MESSAGE: "GET ALL USERS",
      ERROR: true,
      SUCCESS: false,
      DATA: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  addUser,
};
