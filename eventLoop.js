console.log('Start');

setTimeout(() => {
  console.log('setTimeout');
}, 1000);

setImmediate(() => {
  console.log('setImmediate');
});

process.nextTick(() => {
  console.log('nextTick');
});

console.log('End');