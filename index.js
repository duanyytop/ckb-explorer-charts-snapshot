const snapshot = require("./snapshot");

const url_paths = [
  {
    url: "https://explorer.nervos.org/charts/difficulty_hash_rate",
    path: "path/difficulty_hash_rate.png"
  },
  {
    url: "https://explorer.nervos.org/charts/difficulty_uncle_rate",
    path: "path/difficulty_uncle_rate.png"
  },
  {
    url: "https://explorer.nervos.org/charts/difficulty",
    path: "path/difficulty.png"
  },
  {
    url: "https://explorer.nervos.org/charts/hash_rate",
    path: "path/hash_rate.png"
  },
  {
    url: "https://explorer.nervos.org/charts/uncle_rate",
    path: "path/uncle_rate.png"
  },
  {
    url: "https://explorer.nervos.org/charts/transaction_count",
    path: "path/transaction_count.png"
  },
  {
    url: "https://explorer.nervos.org/charts/address_count",
    path: "path/address_count.png"
  },
  {
    url: "https://explorer.nervos.org/charts/cell_count",
    path: "path/cell_count.png"
  },
  {
    url: "https://explorer.nervos.org/charts/total_dao_deposit",
    path: "path/total_dao_deposit.png"
  }
];

(async () => {
  url_paths.forEach(({url, path}) => snapshot.snapshot(url, path));
})();
