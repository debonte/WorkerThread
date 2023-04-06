const { Worker } = require('worker_threads');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  async function main () {
    // create a new worker thread
    const worker = new Worker('./worker.js');

    // listen for messages from the worker thread
    worker.on('message', (message) => {
      console.log('Message received from worker thread:', message);
    });

    while (true){
      // send a message to the worker thread
      worker.postMessage('Hello from the main thread!');

      await sleep(3000);
    }
  }

  await main();
}

run();
