function setGetRouters(router, path, routerController) {
    router.get(path, routerController)
  }

  module.exports = setGetRouters;