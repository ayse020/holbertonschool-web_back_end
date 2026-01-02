// 1-get_list_student_ids.js
function getListStudentIds(students) {
  // Check if the argument is an array
  if (!Array.isArray(students)) {
    return []; // Return empty array if not an array
  }
  
  // Use map to extract only the id from each student object
  return students.map(student => student.id);
}

module.exports = getListStudentIds;
