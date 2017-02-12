'use strict';
window.addEventListener('load', startApp, false);
function startApp () {
    var content = document.getElementById('content'),
        studentsData =	'Владимир,Тимофеев,муж.,vovanium,1999,2,18\n\
Алексей,Григорьев,муж.,izaya256,1998, 11, 1\n\
Ирина,Рубан,жен.,princess_rina88,1999, 5, 12\n\
Светлана,Овчаренко,жен.,ami-caty,1999, 7, 10\n\
Елена,Рындина,жен.,dn100980rev,1999, 8, 10\n\
Полина,Жиляева,жен.,polina_volna,1999, 4, 22',
        studentsListHeader = ['fullName','gender', 'skype'],
        studentsFullProp = ['name','surname', 'age', 'skype','gender'],
	    group;

    group = new StudentsList(studentsData);

    showStudentsList(content, studentsListHeader, group, studentsFullProp);
}




