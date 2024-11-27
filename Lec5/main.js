// const fs = require('fs');

// fs.writeFileSync('first.txt', 'hello world');

// console.log('writed');

// const fs = require('fs');

// fs.writeFile('first.txt', 'hello world', (err, data) => {
//   if (err) {
//     process.exit();
//   }
//   fs.writeFile('sec.txt', 'hello world', (err) => {});
// });

// console.log('writed');

const users = [
  {
    id: 1,
    name: 'levani',
    age: 26,
  },
];

const fs = require('fs/promises');

// async function main() {
//   //   const first = await fs.redFile('first.txt', 'utf-8');
//   //   const sec = await fs.redFile('sec.txt', 'utf-8');
//   //   const result = first + '' + sec;
//   //   await fs.writeFile('result.txt', result);

//   //   await fs.writeFile('users.json', JSON.stringify(users));

//   const users = await fs.readFile('users.json', 'utf-8');
//   const pareseUsers = JSON.parse(users);

//   console.log(pareseUsers, 'usr');
// }

// main();

// async function main() {
//   const readData = await fs.readFile('num.txt', 'utf-8');
//   const result = readData
//     .split(' ')
//     .map((el) => Number(el))
//     .reduce((tot, curr) => {
//       tot + curr;
//     });

//   await fs.writeFile('result.txt', JSON.stringify(result));

//   console.log(array, 'readedata');
// }

// main();

// async function main() {
//   const readData = await fs.readFile('sec.txt', 'utf-8');
//   console.log(readData);

//   const array = readData.split('').reverse().join('');
//   console.log(array);
// }
// main();

const [, , firstName, age] = process.argv;
console.log(firstName, age);

async function main() {
  const users = await fs.readFile('users.json', 'utf-8');
  const parseUsers = JSON.parse(users);
  const user = {
    names: firstName,
    age: age,
  };

  parseUsers.push(user);
  await fs.writeFile('users.json', JSON.stringify(parseUsers));
}
main();
