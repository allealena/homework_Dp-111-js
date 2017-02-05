window.onload = function () {
	var content = document.getElementById('content'),
        studentsData =	'Владимир,Тимофеев,муж.,vovanium\n\
						Алексей,Григорьев,муж.,izaya256\n\
						Ирина,Рубан,жен.,princess_rina88\n\
						Светлана,Овчаренко,жен.,ami-caty\n\
						Елена,Рындина,жен.,dn100980rev\n\
						Полина,Жиляева,жен.,polina_volna',
        studentsListHeader = ["Name","Surname","Gender", "Skype", "more"],
	    group,
	    tableStudents;

    group = new StudentsList(studentsData);
    showStudentsList(content, studentsListHeader, group);	

    tableStudents = document.getElementById("tableStudents");
    tableStudents.addEventListener('click', showInfo, false);
}

