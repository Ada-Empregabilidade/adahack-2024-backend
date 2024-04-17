function setDeleteRouters(router, path, routerController) {
    router.delete(path, routerController)
  }

  module.exports = setDeleteRouters;