const http = require('http');
const fs = require('fs').promises;

// Tələbələri saymaq üçün funksiya (3-read_file_async.js-dən)
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    if (lines.length <= 1) {
      return 'Number of students: 0';
    }
    
    const students = lines.slice(1); // Başlıq xəttini çıxar
    const fields = {};
    
    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });
    
    let result = `Number of students: ${students.length}`;
    
    for (const [field, names] of Object.entries(fields)) {
      result += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
    }
    
    return result;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// HTTP server yaradırıq
const app = http.createServer(async (req, res) => {
  // Content-Type header'ını plain text olaraq təyin edirik
  res.setHeader('Content-Type', 'text/plain');
  
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    const databasePath = process.argv[2];
    
    if (!databasePath) {
      res.end('This is the list of our students\nCannot load the database');
      return;
    }
    
    try {
      const studentsInfo = await countStudents(databasePath);
      res.end(`This is the list of our students\n${studentsInfo}`);
    } catch (error) {
      res.end(`This is the list of our students\n${error.message}`);
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Server 1245 portunda dinləyir
app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
