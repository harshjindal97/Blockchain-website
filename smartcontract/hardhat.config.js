// https://eth-sepolia.g.alchemy.com/v2/R_3fjNtiwrYBCsyyJr7XF-n8VHZfYGAT
require('dotenv').config();
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/R_3fjNtiwrYBCsyyJr7XF-n8VHZfYGAT',
      accounts: ['1963cb29bdff55afe852c9e4980f3faf03f2e68023c8d54229aebada9a0e5433'],
    },
},
};
