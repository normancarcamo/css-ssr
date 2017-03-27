var pathModule = require('path');
var config = require(process.cwd()+'/package.json').config
var extensions = [".css",".styl",".scss",".less"]

if (config && "css-ssr" in config && config["css-ssr"].ext) {
  extensions = config["css-ssr"].ext
}

module.constructor.prototype.require = function (path) {
  try {
    if (extensions.indexOf(pathModule.extname(path)) === -1) {
      return this.constructor._load(path, this)
    }
  } catch (err) {
    // if module not found, we have nothing to do, simply throw it back.
    if (err.code === 'MODULE_NOT_FOUND') {
      throw err
    }
    // resolve the path to get absolute path
    path = pathModule.resolve(__dirname, path)
    // Write to log or whatever
    if (extensions.indexOf(pathModule.extname(path)) === -1) {
      console.log(`Error requiring the file: ${path}`)
    }
  }
}
