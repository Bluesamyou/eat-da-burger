const connection = require('./connections')

const orm = {
    create: function (table, cols, values),
    read_all: function (table) {
        return new Promise(function (resolve, reject) {
            connection.query('SELECT * FROM ??', [table],
                function (err, data) {
                    if (err) throw reject(err)

                    resolve(data)
                })
        })
    },
    update: function (table, setCols, matches) {
        return new Promise(function (resolve, reject) {
            connection.query(`UPDATE ?? SET ?? WHERE ?? = ?`)
        })
    },
    delete: ""
}

module.exports = orm