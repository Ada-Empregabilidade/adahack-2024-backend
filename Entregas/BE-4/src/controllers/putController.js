async function putController(req, res, routerService) {
    try {
        const requestItemId = await req.params.id;
        const requestBodyData = await req.body;
        const putResponse = await routerService(requestItemId, requestBodyData);
        res.status(200).json({message: 'puts'})
    } catch (error) {
        res.status(500).json({message: 'errou!'})
    }
}

module.exports = putController;