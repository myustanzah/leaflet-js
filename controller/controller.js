const Model = require('../model/model')

class Controller {
    static list(req, res) {
        Model.list((err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.render('index.ejs', { data })
            }
        })
    }
}

module.exports = Controller