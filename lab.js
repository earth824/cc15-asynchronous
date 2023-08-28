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

readFile('user.json', 'utf-8', function (err, data) {});

function readFilePromise() {}

readFilePromise()
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
