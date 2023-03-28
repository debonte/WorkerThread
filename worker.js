const { parentPort } = require('worker_threads');

// listen for messages from the parent thread
parentPort.on('message', (message) => {
  console.log('Message received from main thread:', message);
  
  // send a message back to the main thread
  parentPort.postMessage('Hello from the worker thread!');
});
