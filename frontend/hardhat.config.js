require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
};
// require("@nomicfoundation/hardhat-toolbox");

// const PRIVATE_KEY =
//   "cab32102d1e86fe99f6530989cc405e716fafeb5375f62397e73869596b55e79";
// const RPC_URL = "https://rpc.ankr.com/polygon_mumbai";

// module.exports = {
//   defaultNetwork: "polygon_mumbai",
//   networks: {
//     hardhat: {
//       chainId: 80001,
//     },
//     polygon_mumbai: {
//       url: RPC_URL,
//       accounts: [`0x${PRIVATE_KEY}`],
//     },
//   },
//   solidity: {
//     version: "0.8.17",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
// };