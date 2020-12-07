"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStore = void 0;
const framework_1 = require("@sapphire/framework");
const Task_1 = require("./Task");
class TaskStore extends framework_1.BaseStore {
    constructor(client) {
        super(client, Task_1.Task, { name: 'tasks' });
    }
}
exports.TaskStore = TaskStore;
