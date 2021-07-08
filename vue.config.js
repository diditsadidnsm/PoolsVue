let publicPath = process.env.NODE_ENV === 'production' ? '/PoolsVue' : '/dist';

module.exports = {
  publicPath,
  productionSourceMap: false,
};
