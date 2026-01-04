// 1-stdin.js
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    // Hex dump göstərir ki, bizdə "Guillaume\r\n" var
    // Test isə "Guillaume\r" gözləyir
    // Onda \n-i silək
    const str = chunk.toString();
    // Yalnız \n-i silək (əgər varsa)
    const output = str.endsWith('\n') ? str.substring(0, str.length - 1) : str;
    process.stdout.write(`Your name is: ${output}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
