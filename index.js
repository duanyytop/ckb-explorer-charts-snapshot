const snapshot = require("./snapshot");

const url_paths = [
  {
    url: "https://explorer.nervos.org/charts/difficulty_hash_rate",
    path: "path/difficulty_hash_rate.png"
  },
  {
    url: "https://explorer.nervos.org/charts/difficulty_uncle_rate",
    path: "path/difficulty_uncle_rate.png"
  }
];

(async () => {
  url_paths.forEach(({url, path}) => snapshot.snapshot(url, path));
})();
