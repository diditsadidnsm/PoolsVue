let publicPath = process.env.NODE_ENV === 'production' ? '/dist' : '/';

module.exports = {
  publicPath,
  productionSourceMap: false,
};
