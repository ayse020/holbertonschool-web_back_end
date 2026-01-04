// 1-stdin.js
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    // Buffer-u string-ə çevirək
    const input = chunk.toString();
    
    // Əgər \r\n varsa, onu \n ilə əvəz edək
    // Çünki \r yeni sətir kimi işləyir
    const name = input.replace(/\r\n$/, '\n').replace(/\n$/, '');
    
    process.stdout.write(`Your name is: ${name}\n`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
