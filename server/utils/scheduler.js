var STD = require('../../../bridge/metadata/standards');
var cron = require('node-cron');
var sequelize = require('../../../core/server/config/sequelize');
var errorHandler = require('sg-sequelize-error-handler');

var requestMinutes = [];
for (var i=0; i<60; i++) {
    requestMinutes.push(i);
}
requestMinutes = requestMinutes.join(',');

module.exports = {
    run: function () {

    }
};