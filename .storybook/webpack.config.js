const path = require('path')
const rootPath = path.resolve(__dirname, '../')

module.exports = ({ config }) => {
  config.resolve.extensions = ['.js', '.vue', '.json', '.styl']
  config.resolve.alias = {
    ...config.resolve.alias,
    '~': rootPath,
    '~~': rootPath,
    '@': rootPath,
    assets: `${rootPath}/assets`,
    static: `${rootPath}/static`
  }

  config.module.rules.push({
    test: /\.pug$/,
    loader: 'pug-plain-loader'
  })

  config.module.rules.push({
    test: /\.styl(us)?$/,
    use: ['style-loader', 'vue-style-loader', {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 2,
        onlyLocals: false
      }
    },
    {
      loader: 'stylus-loader',
      options: {
        sourceMap: true,
        import: [
          `${rootPath}/assets/styl/_variables.styl`
        ]
      }
    }],
    include: rootPath
  })

  config.resolve.modules = config.resolve.modules.concat(rootPath)

  return config
}
