'use strict';
window.addEventListener('load', startApp, false);
function startApp () {
    var content = document.getElementById('content'),
        cardMore = document.getElementById('card'),
        studentsData =	'Владимир,Тимофеев,муж.,vovanium,18\n\
						Алексей,Григорьев,муж.,izaya256,18\n\
						Ирина,Рубан,жен.,princess_rina88,18\n\
						Светлана,Овчаренко,жен.,ami-caty,18\n\
						Елена,Рындина,жен.,dn100980rev,18\n\
						Полина,Жиляева,жен.,polina_volna,18',
        studentsListHeader = ['fullName','gender', 'skype'],
        studentsFullProp = ['name','surname', 'age', 'skype','gender'],
	    group,
	    dataStudent,
        buttons,
	    target;

    group = new StudentsList(studentsData);
    showStudentsList(content, studentsListHeader, group);

    function showInfo (event) {
        target = event.target; 
        dataStudent = target.getAttribute('data-student');
        getFullForm(group, studentsFullProp, dataStudent, cardMore);   
    }
    
    function clickBtn () {
        buttons = document.getElementsByTagName('button');        
        [].forEach.call(buttons, function(item) {
        item.addEventListener('click', showInfo, false);
        })
    }

    function hideInfo () {
        cardMore.innerHTML = '';
    }
    
    cardMore.addEventListener('click', hideInfo, false); 
    clickBtn();   
}




