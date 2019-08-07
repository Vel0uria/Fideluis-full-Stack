const router = require("express").Router();
const { verifyToken } = require("../config/token");
const {
  getCards,
  getCardsById,
  randomCard,
  getReading,
  updateReading,
  deleteReading,
  newReading
} = require("../controllers/readingController");

//Read
router.get("/cards", getCards);

router.get("/card/:id", getCardsById);

router.get("/cards/random", randomCard);

router.get("/readings/:id", getReading);
//Create
router.post("/savereading", newReading);

//Update
router.patch("/reading/:id", updateReading);

//Delete
router.delete("/reading/:id", deleteReading);

module.exports = router;
