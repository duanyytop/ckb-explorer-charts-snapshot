const snapshot = require("./snapshot");

const url_paths = [
  {
    url: "https://explorer.nervos.org/charts/difficulty-hash-rate",
    path: "path/difficulty_hash_rate.png"
  },
  {
    url: "https://explorer.nervos.org/charts/difficulty-uncle-rate",
    path: "path/difficulty_uncle_rate.png"
  },
  {
    url: "https://explorer.nervos.org/charts/difficulty",
    path: "path/difficulty.png"
  },
  {
    url: "https://explorer.nervos.org/charts/hash-rate",
    path: "path/hash_rate.png"
  },
  {
    url: "https://explorer.nervos.org/charts/uncle-rate",
    path: "path/uncle_rate.png"
  },
  {
    url: "https://explorer.nervos.org/charts/transaction-count",
    path: "path/transaction_count.png"
  },
  {
    url: "https://explorer.nervos.org/charts/address-count",
    path: "path/address_count.png"
  },
  {
    url: "https://explorer.nervos.org/charts/cell-count",
    path: "path/cell_count.png"
  },
  {
    url: "https://explorer.nervos.org/charts/total-dao-deposit",
    path: "path/total_dao_deposit.png"
  }
];

(async () => {
  url_paths.forEach(({url, path}) => snapshot.snapshot(url, path));
})();
