const connection = require('./connections')


function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}
const orm = {
    insertOne: function (table, cols, values) {

        return new Promise(function (resolve, reject) {
            var queryString = "INSERT INTO " + table

            queryString += " ("
            queryString += cols.toString()
            queryString += ") "
            queryString += "VALUES ("
            queryString += printQuestionMarks(values.length)
            queryString += ") "
            connection.query(queryString, values,
                function (err, data) {
                    if (err) throw err

                    resolve(data)

                })

        })
    },
    selectAll: function (table) {
        return new Promise(function (resolve, reject) {
            connection.query('SELECT * FROM ??', [table],
                function (err, data) {
                    if (err) throw reject(err)

                    resolve(data)
                })
        })
    },
    updateOne: function (table, setval, matchField) {
        return new Promise(function (resolve, reject) {

            var queryString = "UPDATE " + table

            queryString += " SET "
            queryString += objToSql(setval)
            queryString += " WHERE "
            queryString += matchField

            connection.query(queryString,
                function (err, data) {
                    console.log(data)
                    if (err) reject()

                    resolve()
                })
        })
    }
}

module.exports = orm