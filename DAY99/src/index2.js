"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...players) {
    console.log(...players);
    console.log(`Score : ${players.length}`);
  },
};

// game.odds = ["team1", "team2", "draw"];

const [players1, players2] = game.players;

const [gk1, ...fieldPlayers1] = players1;
const players1Final = [...players1, "Thiago", "Coutiho", "Perisic"];

const [gk2, ...fieldPlayers2] = players2;

const allPlayers = [...players1, ...players2];

const {
  odds: { team1: team1, x: draw, team2: team2 },
} = game;

game.printGoals(...game.scored);


team1 < team2 && console.log("Team 1 is more likely to win"); 
team1 > team2 && console.log("Team 2 is more likely to win");

