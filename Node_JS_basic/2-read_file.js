const fs = require('fs');

function countStudents(path) {
  try {
    // Faylı sinxron oxu
    const data = fs.readFileSync(path, 'utf8');
    
    // Sətirləri böl, boş xətləri sil
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    // Əgər yalnız başlıq varsa
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }
    
    // Başlığı çıxar (birinci sətir)
    const students = lines.slice(1);
    
    // İxtisaslara görə tələbələri qruplaşdır
    const fields = {};
    
    students.forEach((student) => {
      const [firstname, lastname, age, field] = student.split(',');
      
      // Əgər bu ixtisas üçün massiv yoxdursa, yarat
      if (!fields[field]) {
        fields[field] = [];
      }
      
      // Tələbənin adını əlavə et
      fields[field].push(firstname);
    });
    
    // Ümumi tələbə sayını çap et
    console.log(`Number of students: ${students.length}`);
    
    // Hər ixtisas üçün statistikaları çap et
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
    
  } catch (error) {
    // Fayl oxuna bilməzsə, xəta at
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
