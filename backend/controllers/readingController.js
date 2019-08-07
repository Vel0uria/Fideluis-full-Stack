const Card = require("../models/Card");
const Reading = require("../models/Reading");
const User = require("../models/User");

exports.getCards = (req, res, next) => {
  Card.find()
    .then(cards => res.status(200).json({ cards }))
    .catch(err => res.status(500).json(err));
};

exports.getCardsById = (req, res, next) => {
  const { id } = req.params;
  Card.findById({ id })
    .then(card => res.status(200).json({ card }))
    .catch(err => res.status(500).json({ err }));
};

exports.randomCard = (req, res, next) => {
  const { n = 6 } = req.query;
  const chosenCards = new Set();
  function blowMyMind(cards) {
    chosenCards.add(cards[Math.floor(Math.random() * cards.length - 1)]);
    if (chosenCards.size !== Number(n)) return blowMyMind(cards);
    return;
  }
  Card.find()
    .then(cards => {
      blowMyMind(cards);

      res.status(200).json({ cards: [...chosenCards] });
    })
    .catch(err => {
      res.status(500).json({ err }, console.log(err, { msg: "??" }));
    });
};

exports.newReading = (req, res, next) => {
  const { name, cards, user } = req.body;
  const id = user._id;
  console.log(user._id);
  Reading.create({ name, cards, user })

    .then(reading => {
      User.findByIdAndUpdate(
        id,
        { $push: { readings: reading } },
        { new: true }
      ).then(user => res.status(200).json({ user, reading }));
    })
    .catch(err => res.status(500).json(err));
};

exports.getReading = (req, res, next) => {
  const { id } = req.params;
  Reading.findById(id)
    .populate("cards")
    .then(reading => res.status(200).json({ reading }))
    .catch(err => res.status(500).json({ err }));
};

exports.updateReading = (req, res, next) => {
  const { id } = req.params;
  Reading.findByIdAndUpdate(id, { ...req.body }, { new: true })
    .then(reading => res.status(200).json({ reading }))
    .catch(err => res.status(500).json({ err }));
};

exports.deleteReading = (req, res, next) => {
  const { id } = req.params;
  Reading.findByIdAndDelete(id)
    .then(reading => res.status(200).json({ reading, msg: "deleted" }))
    .catch(err => res.status(500).json({ err }));
};
