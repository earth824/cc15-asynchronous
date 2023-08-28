// function log(ms, cb) {
//   // setTimeout(function () {
//   //   cb();
//   // }, ms);

//   setTimeout(cb, ms);
// }

// log(1000, function () {
//   console.log('a');
//   log(1000, function () {
//     console.log('b');
//     log(1000, function () {
//       console.log('c');
//     });
//   });
// });

// for (let i = 65; i <= 65 + 25; i++) {
//   log(1000 * (i - 65), function () {
//     console.log(String.fromCharCode(i));
//   });
// }

const { readFile } = require('fs');

readFile('user.json', 'utf-8', function (err, data) {
  console.log(data);
});

function readFilePromise(path, encoding) {
  const promise = new Promise(function (resolve, reject) {
    reject(200);
  });
  return promise;
}

const result = readFilePromise('user.json', 'utf-8')
  .then(function (abcdefgh) {})
  .catch(function (err) {});

const run = async () => {
  try {
    const abcdefgh = await readFilePromise('user.json', 'utf-8');
    console.log(p);
  } catch (err) {
    console.log(err);
  }
};

run();
console.log('hello');
