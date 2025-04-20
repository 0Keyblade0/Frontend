// A place for utility functions, if you need any
import { hexToHSL, quickdrawToVectors } from "./utilities.js";

import catsData from "./data/quickdraw-cats-small.json" assert { type: "json" };
import palettes from "./data/colorlovers-palettes.json" assert { type: "json" };
import xkcdColors from "./data/xkcd-colors.json" assert { type: "json" };
import wikiColors from "./data/wikipedia-colors.json" assert { type: "json" };
import planets from "./planets.json" assert { type: "json" };

console.log("....Loading data");

console.log(planets)

//==================================
// API example
function loadGutendexData(topic) {
  
  console.log("REQUEST DATA");
  let url = `https://gutendex.com/books/?topic=${topic}`;
  
  console.log("Fetch URL", topic);
  fetch(url, {mode: "cors"})
    .then((res) => {
    console.log(res)
     return res.json()
    })
    .then((out) => console.log("Checkout this JSON! ", out))
    .catch((err) => {
      throw err;
    });
}
loadGutendexData("pirates")
//==================================


// Load and preprocess any data

// Preprocess data

// Often its useful to store your data
// (planets, movies, colors, soccer matches,etc),
// in a class for easier access
class Color {
  constructor({ hex, name, source }) {
    this.hex = hex;
    this.name = name;
    this.hsl = hexToHSL(hex);
    this.source = source;
  }
}

class Planet {
  constructor({name, color, distance, size, velocity, desc}) {
    this.name = name;
    this.color = color;
    this.dist = distance;
    this.size = size;
    this.vel = velocity;
    this.desc = desc;
    this.x = 500 + distance
    this.y = 500
  }
}

// XKCD
// console.log(xkcdColors.colors)
let colors = xkcdColors.colors.map(
  (c) => new Color({ hex: c.hex, name: c.color, source: "xkcd" })
);

let solar_system = planets.map(
  (c) => new Planet({name: c.name, color: c.color, distance: c.distance, size: c.size, velocity: c.velocity, desc: c.description })
);

console.log(solar_system)
// console.log(colors)
// console.log(wikiColors)
let wikiProcessed = wikiColors.map(
  (c) => new Color({ hex: c.color, name: c.name, source: "wiki" })
)
// console.log(wikiProcessed)
colors = colors.concat(wikiProcessed)

// console.log(colors)

// console.log(catsData)

let cats = catsData.map(c => quickdrawToVectors(c))

// console.log(cats)

// console.log(colors)

// What data we want to export to our visualization app?
let data = {
  cats: cats,
  colors: colors,
  planets: solar_system
};

export { data };
