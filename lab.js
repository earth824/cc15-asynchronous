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
    readFile(path, encoding, function (err, data) {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
  return promise;
}

readFilePromise('user.json', 'utf-8')
  .then(response => {
    console.log(response);
    // {
    //   "firstName": "John",
    //   "lastName": "Doe",
    //   "age": 49
    // }
  })
  .catch(err => {
    console.log(err);
  });
