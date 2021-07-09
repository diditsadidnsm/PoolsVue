let publicPath = process.env.NODE_ENV === 'production' ? '/public' : '/';

module.exports = {
  publicPath,
  productionSourceMap: false,
};
