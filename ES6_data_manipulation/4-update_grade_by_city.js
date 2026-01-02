// 4-update_grade_by_city.js
function updateStudentGradeByCity(students, city, newGrades) {
  // Check if students is an array
  if (!Array.isArray(students)) {
    return [];
  }
  
  // 1. Filter students by city
  const studentsInCity = students.filter(student => student.location === city);
  
  // 2. Map through students and add grades
  return studentsInCity.map(student => {
    // Find the grade for this student
    const gradeObj = newGrades.find(grade => grade.studentId === student.id);
    
    // Create a new object with or without grade
    const updatedStudent = { ...student };
    
    if (gradeObj) {
      updatedStudent.grade = gradeObj.grade;
    } else {
      updatedStudent.grade = 'N/A';
    }
    
    return updatedStudent;
  });
}

module.exports = updateStudentGradeByCity;
