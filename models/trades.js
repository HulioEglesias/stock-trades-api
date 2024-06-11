const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:", {
  define: {
    timestamps: false,
  },
});

const Trades = sequelize.define("Trades", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  type: DataTypes.ENUM("buy", "sell"),
  user_id: DataTypes.INTEGER,
  symbol: DataTypes.STRING,
  shares: DataTypes.INTEGER,
  price: DataTypes.INTEGER,
  timestamp: DataTypes.INTEGER,
});

module.exports = Trades;
