'use strict';
function StudentsList () {
	var students = studentData(),
	    studentsCollection = [],	
	    studentsInfo = [],
	    studentsData = [],
	    listStudent = [],
	    student,
	    name,
	    surname,
	    gender,
	    skype,
	    birthYear,
        birthMonth,
        birthDate;

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
		    name = item[0];
		    surname = item[1];
		    gender = item[2];
		    skype = item[3];
		    birthYear = item[4];
		    birthMonth = item[5];
		    birthDate = item[6];
            student = new Student(name, surname, gender, skype, birthYear, birthMonth, birthDate);
        
            listStudent.push(student);
	    });
    }	
    return listStudent;
}
