const fs = require("fs");
const touristPlace = require("./data/touristPlace.json");
fs.mkdir("Districts", () => {});
touristPlace.map((district) => {
  fs.mkdir(`./Districts/${district.district}`, (err) => {});
  district.visit.map((visit) => {
    fs.writeFile(
      `./Districts/${district.district}/${visit.name}.txt`,
      `# ${district.district} \n ## ${visit.name} \n > ${visit["famous-for"]}`,
      () => {}
    );
  });
});
