
var indexModel = require('../../models/index.server.model');

module.exports.getAll = (req, res) => {
    indexModel.getAll((err, data) => {
        if (err)
            res.json({ success: false, msg: err });
        console.log('Cookie:' + req.cookies)
        res.json(data);
    });
};