'use strict';
function FullInfoView (container, mediator) {
	var table,
	    buttonClose,
	    close,
	    containerTable,
	    studentJSON;

	function showStudentForm (student) {
		studentJSON = student.toJSON();
		table = renderTpl(tmplFullForm(), studentJSON);
        buttonClose = document.createElement('button');
	    close = document.createTextNode('close');
	    containerTable = document.createElement('div');
        containerTable.innerHTML = table;

        buttonClose.appendChild(close);
	    containerTable.appendChild(buttonClose);

	    buttonClose.addEventListener('click', hideInfoStudent, false);
		container.innerHTML = '';
		container.appendChild(containerTable);
		return container;
	}

    function hideInfoStudent () {
    	buttonClose.removeEventListener('click', hideInfoStudent);

    	container.innerHTML = '';
    }

    mediator.sub('getStudentData', showStudentForm);	
}
