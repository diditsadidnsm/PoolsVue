let publicPath = process.env.NODE_ENV === 'production' ? 'pools' : '/';

module.exports = {
  publicPath,
  productionSourceMap: false,
};
