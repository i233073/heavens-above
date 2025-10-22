const satellite = require("./src/satellite");
const iridium = require("./src/iridium");

var location = [39.9042, 116.4074, "%E5%8C%97%E4%BA%AC%E5%B8%82", 52, "ChST"];

function main() {
  satellite.getTable({
    target: 25544,
    pages: 4,
    root: "./public/data/"
  });

  /*
  iridium.getTable({
    pages: 4,
    root: "./public/data/"
  });
  */
}

if (require.main === module) {
  console.log("Running scraper...");
  main();
}

module.exports = { main };
