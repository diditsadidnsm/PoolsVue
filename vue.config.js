let publicPath = process.env.NODE_ENV === 'production' ? 'http://188.166.181.108:5000/' : '/';

module.exports = {
  publicPath,
  productionSourceMap: false,
};

