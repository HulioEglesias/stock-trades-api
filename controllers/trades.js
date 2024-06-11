const TradesModel = require("../models/trades");

const getAll = async (req, res) => {
  const { type, user_id } = req.query;

  const where = {};
  if (type) where.type = type;
  if (user_id) where.user_id = user_id;

  const trades = await TradesModel.findAll({
    where,
    order: ["id"],
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  res.json(trades);
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const trade = await TradesModel.findOne({ where: { id } });
  if (trade) return res.json(trade);

  res.status(404).send("ID not found");
};

const create = async (req, res) => {
  const trades = await TradesModel.create(req.body);
  res.status(201).json(trades);
};
const notAllowed = async (req, res) => {
  res.status(405).json({ message: "Method not allowed" });
};
module.exports = {
  getAll,
  getOne,
  create,
  notAllowed,
};
