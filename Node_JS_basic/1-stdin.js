// Xoş gəlmə mesajını göstər
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Giriş məlumatını oxu
process.stdin.on('data', (data) => {
  // Buffer-i string-ə çevir və boşluqları təmizlə
  const name = data.toString().trim();
  
  // İstifadəçi adını göstər
  process.stdout.write(`Your name is: ${name}\n`);
  
  // Giriş axınını dayandır (pipe ilə işlədildikdə avtomatik bağlanır)
  process.stdin.end();
});

// Giriş axını başa çatdıqda (EOF)
process.stdin.on('end', () => {
  // Bağlanma mesajını göstər
  process.stdout.write('This important software is now closing\n');
});

// Girişi işləməyə hazırla
process.stdin.resume();
