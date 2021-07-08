let publicPath = process.env.NODE_ENV === 'production' ? '/PoolsVue' : '/';

module.exports = {
  publicPath,
  productionSourceMap: false,
};
