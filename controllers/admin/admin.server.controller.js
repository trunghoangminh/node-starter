
var adminModel = require('../../models/admin.server.model');

module.exports.getAll = (req, res) => {
    adminModel.getAll((err, data) => {
        if (err)
            res.json({ success: false, msg: err });
        res.json(data);
    });
};