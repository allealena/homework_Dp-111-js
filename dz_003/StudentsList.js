function StudentsList (students) {
	var studentsCollection = [],	
	    studentsInfo = [],
	    studentsData = [],
	    list = [],
	    student,
	    name,
	    gender,
	    skype,
	    age;

	studentsCollection = students.split('\n');
	studentsCollection.forEach(function(item) {
        studentsData = item.split(',');
        studentsInfo.push(studentsData);
	});
   
	studentsInfo.forEach(function(item) {
		name = item[0];
		surname = item[1];
		gender = item[2];
		skype = item[3];
		age = item[4];
        student = new Student(name, surname, gender, skype, age);
        list.push(student);
	});

	this.list = list;
	return this;
}

