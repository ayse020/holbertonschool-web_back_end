// 2-get_students_by_loc.js
function getStudentsByLocation(students, city) {
  // Check if students is an array
  if (!Array.isArray(students)) {
    return [];
  }
  
  // Use filter to get students in the specified city
  return students.filter(student => student.location === city);
}

module.exports = getStudentsByLocation;
