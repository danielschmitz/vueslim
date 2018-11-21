const staticDir = (app, dir, path) => {
  app.use(path, dir)
}

module.exports = staticDir
