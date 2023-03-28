const { Worker } = require('worker_threads');

// create a new worker thread
const worker = new Worker('./worker.js');

// send a message to the worker thread
worker.postMessage('Hello from the main thread!');

// listen for messages from the worker thread
worker.on('message', (message) => {
  console.log('Message received from worker thread:', message);
});
