// 0-console.js faylı
// displayMessage funksiyası STDOUT-a string arqumenti çap edir

function displayMessage(message) {
  // console.log() istifadə edərək mesajı STDOUT-a çap edirik
  console.log(message);
}

// Funksiyanı digər fayllarda istifadə etmək üçün export edirik
module.exports = displayMessage;
