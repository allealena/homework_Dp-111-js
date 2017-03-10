'use strict';
function StudentsList () {
	var students = studentData(),
	    studentsCollection = [],	
	    studentsInfo = [],
	    studentsData = [],
	    listStudent = [],
	    student;

    createStudents();
    createListStudent();

	function createStudents () {
		studentsCollection = students.split('\n');
	    studentsCollection.forEach(function (item) {
            studentsData = item.split(',');
            studentsInfo.push(studentsData);
	    });
	    return studentsInfo;
	}
	
    function createListStudent () {
    	studentsInfo.forEach(function (item) {
            student = new Student(...item);        
            listStudent.push(student);
	    });
    }	
    return listStudent;
}
