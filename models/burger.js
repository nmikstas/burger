// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger =
{
    allBurgers: function(cb)
    {
        orm.selectAll("burgers", function(res)
        {
            if(cb)cb(res);
        });
    },

    createBurger: function(burgerName, cb)
    {
        orm.insertOne("burgers", "burger_name", "devoured", burgerName, false, function(res)
        {
            if(cb)cb(res);
        });
    },

    updateDevoured: function(burgerName, isEaten, cb)
    {
        orm.updateOne("burgers", "devoured", isEaten, "burger_name", burgerName, function(res)
        {
            if(cb)cb(res);
        });
    },

    updateDevouredID: function(id, isEaten, cb)
    {
        orm.updateOne("burgers", "devoured", isEaten, "id", id, function(res)
        {
            if(cb)cb(res);
        });
    },

    deleteBurger: function(burgerName, cb)
    {
        orm.deleteOne("burgers", "burger_name", burgerName, function(res)
        {
            if(cb)cb(res);
        });
    },

    deleteBurgerID: function(id, cb)
    {
        orm.deleteOne("burgers", "id", id, function(res)
        {
            if(cb)cb(res);
        });
    },

    disconnect: function()
    {
        orm.closeConnection();
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
