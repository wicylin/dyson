var generateResponse = function(req, res, next) {
    res.body = req.body;
    next();
};

module.exports = {
    path: '/dummy-two',
    callback: generateResponse
};
