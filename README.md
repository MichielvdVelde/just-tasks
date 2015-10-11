# just-tasks

just-tasks is a very simple module to run 'tasks'. In essence it's just a rename of node's own `EventEmitter` interface, with semantics to match its function.

## Installation

```
node install just-tasks
```

## Usage

The module just renames the event emitter's default methods so you can use the following:

* `TaskRunner.task(name, function)`: Create a new task with the specified name (alias of `EventEmitter`'s `on`)
* `TaskRunner.taskOnce(name, function)`: Create a new single use task with the specified name (alias of `EventEmitter`'s `once`)
* `TaskRunner.run(name[, args])`: Run the task with the specified name and the given arguments (alias of `EventEmitter`'s `emit`)

### Example

```js
var TaskRunner = require('just-tasks');

// Create a new task
TaskRunner.task('print.welcome', function(name) {
    console.log('Welcome, %s!', name);
});

// Now, maybe from somewhere else (TaskRunner is a singleton), run the task
TaskRunner.run('print.welcome', 'Michael');
```

Of course you can also use callbacks as you're used to in node.

## License

Copyright 2015 Michiel van der Velde.

This software is licensed under the MIT License.
