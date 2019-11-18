// Import MySQL connection.
var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm =
{
    selectAll: function(table, cb)
    {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, table, function(err, result)
        {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function(table, col1, col2, val1, val2, cb)
    {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
        connection.query(queryString, [table, col1, col2, val1, val2], function(err, result)
        {
            if(err)throw err;
            cb(result);
        });
    },

    updateOne: function(table, col1, val1, col2, val2, cb)
    {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?"
        connection.query(queryString, [table, col1, val1, col2, val2], function(err, result)
        {
            if(err) throw err;
            cb(result);
        });
    },

    deleteOne: function(table, col, val, cb)
    {
        var queryString = "DELETE FROM ?? WHERE ?? = ?"
        connection.query(queryString, [table, col, val], function(err, result)
        {
            if(err) throw err;
            cb(result);
        });
    },

    closeConnection: function()
    {
        connection.end();
    }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
