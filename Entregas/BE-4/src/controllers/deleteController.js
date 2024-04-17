async function deleteController(req, res, routerService) {
    try {
        const requestItemId = await req.params.id;
        const deleteResponse = await routerService(requestItemId);
        res.status(200).json({message: 'deletei'})
    } catch (error) {
        res.status(500).json({message: 'errou!'})
    }
}

module.exports = deleteController;