const { model, Schema } = require("mongoose");

const cardSchema = new Schema(
  {
    name: String,
    name_short: String,
    value: String,
    value_int: Number,
    meaning_up: String,
    meaning_rev: String,
    desc: String,
    img: String
  },

  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Card", cardSchema);
