import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
});

const Game = mongoose.model("Game", schema);

export default Game;
