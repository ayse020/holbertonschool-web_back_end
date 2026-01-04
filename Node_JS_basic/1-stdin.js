// 1-stdin.js
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const input = data.toString();
  
  let name = input;
  if (name.endsWith('\r\n')) {
    name = name.slice(0, -1); // \n-i sil
  } else if (name.endsWith('\n')) {
    name = name.slice(0, -1) + '\r'; // \n-i \r ilə əvəz et
  }
  
  process.stdout.write(`Your name is: ${name}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
