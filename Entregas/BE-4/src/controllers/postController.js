async function postController(req, res, routerService) {
    try {
        const requestBodyData = await req.body;
        const postResponse = await routerService(requestBodyData);
        res.status(200).json({message: 'postei'})
    } catch (error) {
        res.status(500).json({message: 'errou!'})
    }
}

module.exports = postController;