const Account = require("../models/account");
const Lock = require("../utils/lock");

const lockForRace = new Lock();

async function transferToAccount({ amount, accountNumber }) {
  const unlock = await lockForRace.lock();

  const account = await Account.findOne({ where: { accountNumber } });
  const newAmount = amount + account.amount;
  const result = await account.update({ amount: newAmount });

  await unlock();
  return result;
}

const transfer = async (req, res) => {
  let arr = req.body;
  if (arr.length > 10) {
    res
      .status(400)
      .json({ error: "you can not make more than 10 transfers at a go" });
  } else {
    try {
      const result = await Promise.all(
        arr.map(async (obj) => await transferToAccount(obj))
      );
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ err: "server error" });
    }
  }
};

const create = async (req, res) => {
  try {
    const result = await Account.create(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Ooops! Server error" });
  }
};

module.exports = {
  transfer,
  create,
};
