var mongoose = require('mongoose'),
    clientModel = require('../models/Client'),
    visitModel = require('../models/Visit'),
    familyModel = require('../models/Family');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('aliment db opened');
    });

    //lientModel.createMockClients();
    familyModel.createMockFamilies();
    //visitModel.createMockVisits();
};

