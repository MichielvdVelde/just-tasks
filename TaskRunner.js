/**
 * TaskRunner interface
*/

var events = require('events');
var util = require('util');

var TaskRunner = function() {
    events.EventEmitter.call(this);

    this.task = this.on;
    this.taskOnce = this.once;
    this.run = this.emit;

};

util.inherits(TaskRunner, events.EventEmitter);

// Create the TaskRunner and make it available
exports = module.exports = new TaskRunner();
