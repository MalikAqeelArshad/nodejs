const users = require("../MOCK_DATA.json");
const fnUser = (id) => users.find((item) => item.id == Number(id));

module.exports = {
   users,
   fnUser,
};
