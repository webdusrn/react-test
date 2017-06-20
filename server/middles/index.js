module.exports.connect = function () {
    return function (req, res, next) {
        req.appMiddles = {};
        next();
    };
};