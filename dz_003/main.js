'use strict';
window.addEventListener('load', startApp, false);
function startApp () {
	var content = document.getElementById('content'),
        cardMore = document.getElementById('card'),
        studentsData =	'Владимир,Тимофеев,муж.,vovanium,21\n\
						Алексей,Григорьев,муж.,izaya256,21\n\
						Ирина,Рубан,жен.,princess_rina88,21\n\
						Светлана,Овчаренко,жен.,ami-caty,21\n\
						Елена,Рындина,жен.,dn100980rev,21\n\
						Полина,Жиляева,жен.,polina_volna,21',
        studentsListHeader = ['fullName','gender', 'skype'],
        studentsFullProp = ['name','surname', 'age', 'skype','gender'],
	    group,
	    tableStudents,
	    dataStudent,
	    target;

    group = new StudentsList(studentsData);
    showStudentsList(content, studentsListHeader, group);

    function showInfo (event) {
        target = event.target;
        	     	
        if (target.tagName === 'BUTTON') {
      	    dataStudent = target.getAttribute('data-student');
            getFullForm(group, studentsFullProp, dataStudent, cardMore);
        } else {
        	cardMore.innerHTML = '';
        }
    }
     
    tableStudents = document.getElementById("content");
    tableStudents.addEventListener('click', showInfo, false);
}

