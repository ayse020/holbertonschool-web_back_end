// 1-stdin.js

// Welcome mesajını çap et
console.log('Welcome to Holberton School, what is your name?');

// stdin-dan oxumaq üçün gözlə
process.stdin.on('readable', () => {
  // stdin-dan məlumatı oxu
  const name = process.stdin.read();
  
  // Əgər məlumat varsa (null deyilsə)
  if (name !== null) {
    // İstifadəçinin adını çap et
    // toString() ilə Buffer-u string-ə çevir və trim() ilə boşluqları sil
    process.stdout.write(`Your name is: ${name.toString().trim()}\n`);
  }
});

// stdin bağlandıqda (CTRL+D və ya pipe bitdikdə)
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
