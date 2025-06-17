const { sumTokensExport } = require('../helper/solana');

module.exports = {
  timetravel: false,
  solana: {
    tvl: () => ({}),
    staking: sumTokensExport({ owner: 'SVeQXvXgvMgYegnyEfvJpMoqsRE37TCXFkcEKzWesKv' }),
  },
};
