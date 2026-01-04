// 1-stdin.js
// Node.js program that handles stdin input properly

console.log('Welcome to Holberton School, what is your name?');

// Set encoding for stdin
process.stdin.setEncoding('utf8');

// Variable to track if we've already processed input
let inputProcessed = false;

// Handle user input
process.stdin.on('data', (input) => {
  if (!inputProcessed) {
    const name = input.trim();
    console.log(`Your name is: ${name}`);
    inputProcessed = true;
    
    // Check if stdin is still open
    if (!process.stdin.isTTY) {
      // For non-interactive mode (pipes), end the stream
      process.stdin.end();
    }
  }
});

// Handle end of input
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

// For TTY mode (interactive), resume stdin
if (process.stdin.isTTY) {
  process.stdin.resume();
}
