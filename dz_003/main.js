window.onload = function () {
	var content = document.getElementById('content'),
	    studentsCatalog = [],
	    studentDataSkype,
	    studentDataGen,
	    studentName,
	    student,
	    group;

	do {
	    studentName = prompt('Введите Имя студента:');
	    if(studentName === null) {
	    	break;
	    }
	    studentDataGen = prompt('Введите пол студента:');
	    if(studentDataGen === null) {
	    	break;
	    }
	    studentDataSkype = prompt('Введите skype студента:');
		if(studentDataGen === null) {
	    	break;
	    }

	student = new Student(studentName, studentDataGen, studentDataSkype);
	studentsCatalog.push(student);
	}
	while (!null);
    
	group = new StudentsList(studentsCatalog);
	group.showStudentsList(content);
}
