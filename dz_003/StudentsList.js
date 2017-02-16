function StudentsList (students) {
	var studentsCollection = [],	
	    studentsInfo = [],
	    studentsData = [],
	    listStudent = [],
	    props = [],
	    studentProps,
	    studentJSON,
	    propSt,
	    student,
	    name,
	    gender,
	    skype,
	    birthYear,
        birthMonth,
        birthDate,
        studentItem;

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

        studentJSON = student.toJSON();

     /*   studentProps = [];

        for (key in studentJSON) {
        	propSt = studentJSON[key];
        	studentProps.push(propSt);
        }
        
        props.push(studentProps);*/

           studentProps = [];
        studentJSON = student.toJSON();

        for (key in studentJSON) {
        	propSt = {};
        	propSt[key] = studentJSON[key];
        	studentProps.push(propSt);
        }
        
        props.push(studentProps);
	});
    
	this.list = listStudent; 
	this.listProps = props;
	console.log(props);

	return this;
}
