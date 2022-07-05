import express from "express";
import Game from "./schema";

const router = express.Router();

/**
 * List Games
 */
router.get("/", async (req, res) => {
  const games = await Game.find(null, "name").sort("name");
  res.status(200).send(games);
});

/**
 * Get Game
 */
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const game = await Game.findById(id);
  res.status(200).send(game);
});

/**
 * Create Game
 */
router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const createGame = new Game({ name });
    await createGame.save();
    res.status(200).send(createGame);
  } catch (err) {
    res
      .status(500)
      .send(`[${Game.name}] Error: Unable to delete, responded with ${err}`);
  }
});

/**
 * Update Game
 */
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updateGame = await Game.findByIdAndUpdate(id, { name });
    res.status(200).send(updateGame);
  } catch (err) {
    res
      .status(500)
      .send(`[${Game.name}] Error: Unable to update, responded with ${err}`);
  }
});

/**
 * Delete Game
 */
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteGame = await Game.findByIdAndDelete(id);
    res.status(200).send(deleteGame);
  } catch (err) {
    res
      .status(500)
      .send(`[${Game.name}] Error: Unable to delete, responded with ${err}`);
  }
});

export default router;
