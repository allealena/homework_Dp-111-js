function StudentsList (students) {
	var studentsCollection = [],	
	    studentsInfo = [],
	    studentsData = [],
	    listStudent = [],
	    student,
	    name,
	    gender,
	    skype,
	    birthYear,
        birthMonth,
        birthDate;

	studentsCollection = students.split('\n');
	studentsCollection.forEach(function (item) {
        studentsData = item.split(',');
        studentsInfo.push(studentsData);
	});
   
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

	this.list = listStudent;

	this.toJSON = function () {
        var toJSON = JSON.stringify(this.list);
        return toJSON;
    }  
 	
	return this;
}

