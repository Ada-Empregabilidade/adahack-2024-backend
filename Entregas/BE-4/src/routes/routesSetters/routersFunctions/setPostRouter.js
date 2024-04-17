function setPostRouters(router, path, routerController) {
    router.post(path, routerController)
  }

  module.exports = setPostRouters;