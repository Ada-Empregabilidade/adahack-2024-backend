async function getController(req, res, routerService) {
    try {
        const requestItemId = await req.params.id;
        const getResponse = await routerService(requestItemId);
        res.status(200).json({message: 'get all'})
    } catch (error) {
        res.status(500).json({message: 'errou!'})
    }
}

module.exports = getController;