import { calculate } from "./dist/index.js";
import { createGameState } from "./dist/index.js";

const handData = {
  closedTiles: ["1m", "2m", "3m", "9p", "9p", "9p", "4z", "4z", "4z", "7z"],
  openMelds: [
    {
      type: "set",
      tiles: ["6z", "6z", "6z"],
      from: "north",
    },
  ],
  winningTile: {
    tile: "7z",
    from: "north",
    // isTsumo: true,
  },
  gameState: createGameState({
    roundWind: "east",
    seatWind: "east",
    doraIndicators: ["1m"],
    uradoraIndicators: ["6z"],
  }),
};

console.log("test.js starting");
const result = calculate(handData);
console.log("RESULT: ", result);
console.log("fu list: ", result.handInterpretations[0].fuList);
console.log("yaku ", result.handInterpretations[0].yaku);
console.log("seat payments", result.handInterpretations[0].seatPayments);
