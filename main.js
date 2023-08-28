// function a() {
//   console.log('a run');
// } // 2 minute

// function b() {
//   console.log('b run');
//   for (let i = 0; i < 100000000000; i++) {

//   } // 10 minute
//   a();
// } //

// function c() {
//   // console.log('c run');
//   b();
// } // 1 minute

// c();

// 1. call function c
// 2. log c run
// 3. call function b
// 4. log b run
// 5. call function a
// 6. log a run

// joi
// const loginSchema = joi.object({
//   username: joi.string().trim().required(),
//   password: joi.string().trim().required()
// });

// const registerSchema = joi.object({
//   username: joi.string().trim().required(),
//   password: joi.string().trim().required(),
//   confirmPassword: joi.string().valid(joi.ref('password'))
// })

// const { value, error } = loginSchema.validate({ username: 'aaaa', password: 'false' });
// if (error) {
//   // error occur sent error response to user
// } else {
//   // insert into datatbase
// }

// const { value, error } = registerSchema.validate({ username: 'aaaa', password: 'false', confirmPassword: 'false' });
// if (error) {
//   // error occur sent error response to user
// } else {
//   // insert into datatbase
// }

// const validate = schema => input => {
//   const {value,error} = schema.validate(input)
//   if (error) {
//     // error occur sent error response to user
//   }
//   return value
// }

// chop carrot // 2 min
// chop cabbage // 3 min
// boil water // 15 min
// 20 min
// 15 min

// function a() {
//   console.log('a');
// }

// function b(fn) {
//   // fn = function d(inp1) { console.log('d output', inp1);}
//   setTimeout(() => {
//     for (let i = 0; i < 10000000000; i++) {}
//     console.log('b');
//     fn('output from b'); // d('output from b')
//     // return 'output from b';
//   }, 0);
// }

// function c() {
//   console.log('c');
// }

// function d(inp1) {
//   console.log('d output', inp1);
// }

// a();
// b(d);
// c();

// setTimeout(() => {
//   console.log('execute callback3');
// }, 2000);
// console.log('before setTimeout');
// setTimeout(() => {
//   console.log('execute callback');
// }, 0);
// console.log('after setTimeout');
// setTimeout(() => {
//   console.log('execute callback2');
// }, 1000);

// ES Module
// import { readFile } from 'fs'

// Common JS
const { readFile } = require('fs'); // { readFile, ... }
// readFile('user.jso', { encoding: 'utf-8' }, function (err, data) {
//   console.log(err);
//   console.log(data);
// });

// console.log('John': 'coke')

// Object.assign();
// JSON.parse();
// Array.from({ 0: 'a', 1: 'c' });

// readFile('user.json', 'utf-8', function (err, data) {
//   readFile('product.json', 'utf-8', function (err1, data1) {
//     const parsedData1 = JSON.parse(data1);
//     console.log(parsedData1.name);
//     console.log(parsedData.firstName + ':' + parsedData1.name);
//   });
// });

// readFile('user.json', 'utf-8', function (err, data) {
//   readFile('product.json', 'utf-8', function (err1, data1) {
//     readFile('product.json', 'utf-8', function (err1, data1) {
//       readFile('product.json', 'utf-8', function (err1, data1) {
//         readFile('product.json', 'utf-8', function (err1, data1) {
//           readFile('product.json', 'utf-8', function (err1, data1) {
//             readFile('product.json', 'utf-8', function (err1, data1) {
//               readFile('product.json', 'utf-8', function (err1, data1) {
//                 readFile('product.json', 'utf-8', function (err1, data1) {
//                   readFile('product.json', 'utf-8', function (err1, data1) {
//                     readFile('product.json', 'utf-8', function (err1, data1) {
//                       readFile('product.json', 'utf-8', function (err1, data1) {

//                       });
//                     });
//                   });
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// function a() {
//   console.log('a');
// }

// function c() {
//   console.log('c');
// }

// function d(input) {
//   console.log(input);
// }

// a();
// b(20);
// c();
// d(b(20));

function b(age) {
  // for (let i = 0; i < 10_000_000_000; i++) {}
  // console.log('b');
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < 10_000; i++) {}
      console.log('b');
      if (age >= 18) {
        resolve('success');
      } else {
        reject('less than eighteen');
      }
    }, 0);
  });
  return promise;
}

// const p = b(20);
// p.then(response => {
//   console.log(response);
// });
// p.catch(err => {
//   console.log(err);
// });

// [3, 6, 4].map(el => el * 3).filter().join()

// p.then(response => {
//   console.log('fullfilled', response);
// })
//   .catch(err => {
//     console.log('rejected', err);
//   })
//   .finally(() => {
//     console.log('finally block');
//   });

// fn('less than eighteen')
// fn = (response) => {}
// fn('success')

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

// John:coke
// readFilePromise('user.json', 'utf-8') // 10 S
//   .then(response => {
//     console.log(response);
//     readFilePromise('product.json', 'utf-8') // 8S
//       .then(resProduct => {
//         console.log(resProduct);
//         readFilePromise('product.json', 'utf-8') // 8S
//           .then(response => {
//             console.log(response);
//             readFilePromise('product.json', 'utf-8') // 8S
//               .then(response => {
//                 console.log(response);
//                 readFilePromise('product.json', 'utf-8') // 8S
//                   .then(response => {
//                     // 42S
//                     console.log(response);
//                   })
//                   .catch(err => {
//                     console.log(err);
//                   });
//               })
//               .catch(err => {
//                 console.log(err);
//               });
//           })
//           .catch(err => {
//             console.log(err);
//           });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     return 555;
//   })
//   .then(response555 => {
//     console.log(response555);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// readFilePromise('product.json', 'utf-8')
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// P1, P2, P3, P4, P5
// const resultPromiseAll = Promise.all([P1, P2, P3, P4, P5])
// [resolveP1, resolveP2, resolveP3, resolveP4, resolveP5]

// const p1 = readFilePromise('user.json', 'utf-8');
// const p2 = readFilePromise('product.json', 'utf-8');

// const result = Promise.all([p1, p2]);
// result
//   .then(response => {
//     const resUser = JSON.parse(response[0]);
//     const resProduct = JSON.parse(response[1]);
//     console.log(resUser.firstName + ':' + resProduct.name);
//   })
//   .catch(err => console.log(err));

try {
} catch (err) {}

let a;

async function run() {
  try {
    const p1 = await readFilePromise('user.json', 'utf-8');
    const p2 = await readFilePromise('product.json', 'utf-8');
    const parseUser = JSON.parse(p1);
    const parseProduct = JSON.parse(p2);
    // console.log(parseUser.firstName + ':' + parseProduct.name);
    a = parseUser.firstName + ':' + parseProduct.name;
    return parseUser.firstName + ':' + parseProduct.name;
  } catch (err) {
    console.log(err);
    // something wrong
  }
}

run();
console.log(a);

// run().then(resposne => {
//   console.log(resposne);
// });

// async function run() {
//   const result = await db.query('SELECT * FROM user WHERE email = "a@gmail.com"')
//   result.password === inputPassword
// }

// const run = async function () {};
// const run = async () => {};
