const readline = require('readline');  // 1. Addım

const rl = readline.createInterface({   // 2. Addım
  input: process.stdin,
  output: process.stdout
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {  // 3. Addım
  console.log(`Your name is: ${name}`);
  rl.close();
});

rl.on('close', () => {   // 4. Addım
  console.log('This important software is now closing');
});

