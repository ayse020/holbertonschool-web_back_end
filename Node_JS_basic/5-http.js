const http = require('http');
const fs = require('fs').promises;

const app = http.createServer();

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const headers = lines[0].split(',');
    const students = lines.slice(1).map((line) => {
      const record = line.split(',');
      const student = {};
      headers.forEach((header, idx) => {
        student[header] = record[idx];
      });
      return student;
    });

    const fields = {};
    students.forEach((student) => {
      if (!fields[student.field]) fields[student.field] = [];
      fields[student.field].push(student.firstname);
    });

    let output = `Number of students: ${students.length}\n`;
    for (const [field, names] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }
    return output.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

app.on('request', async (req, res) => {
  const dbFile = process.argv[2];
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    let output = 'This is the list of our students\n';
    try {
      output += await countStudents(dbFile);
      res.end(output);
    } catch (err) {
      res.end(err.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
