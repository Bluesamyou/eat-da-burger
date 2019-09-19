const connection = require('./connections')


function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

const orm = {
    add: function (table, cols, values) {

        return new Promise(function (resolve, reject) {
            var queryString = "INSERT INTO " + table;

            queryString += " (";
            queryString += cols.toString();
            queryString += ") ";
            queryString += "VALUES (";
            queryString += printQuestionMarks(values.length);
            queryString += ") ";
            console.log()
            connection.query(queryString, values,
                function (err, data) {
                    if (err) throw err

                    resolve(data)

                })

        })
    },
    read_all: function (table) {
        return new Promise(function (resolve, reject) {
            connection.query('SELECT * FROM ??', [table],
                function (err, data) {
                    if (err) throw reject(err)

                    resolve(data)
                })
        })
    },
    create: function (table, setCols, matches) {
        return new Promise(function (resolve, reject) {
            connection.query(`UPDATE ?? SET ?? WHERE ?? = ?`)
        })
    },
    delete: ""
}

module.exports = orm