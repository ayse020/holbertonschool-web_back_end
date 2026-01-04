const express = require('express');
const fs = require('fs').promises;

// Tələbələri saymaq üçün funksiya
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      return 'Number of students: 0';
    }

    const students = lines.slice(1);
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

// Express app yaradırıq
const app = express();

// '/' endpoint
app.get('/', (req, res) => {
  res.status(200).type('text').send('Hello Holberton School!');
});

// '/students' endpoint
app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];

  if (!databasePath) {
    res.status(500).type('text').send('This is the list of our students\nCannot load the database');
    return;
  }

  try {
    const studentsInfo = await countStudents(databasePath);
    res.status(200).type('text').send(`This is the list of our students\n${studentsInfo}`);
  } catch (error) {
    res.status(500).type('text').send(`This is the list of our students\n${error.message}`);
  }
});

// Server 1245 portunda dinləyir
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// App dəyişənini ixrac edirik
module.exports = app;
