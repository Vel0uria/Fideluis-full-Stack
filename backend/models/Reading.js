const { model, Schema } = require("mongoose");

const readingSchema = new Schema(
  {
    name: String,

    cards: [{ type: Schema.Types.ObjectId, ref: "Card" }]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Reading", readingSchema);
