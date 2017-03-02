'use strict';
function FullInfoView (container) {
	var table,
	    buttonClose,
	    containerTable,
	    studentJSON;

	function showStudentForm (student) {
		container.innerHTML = '';
		studentJSON = student.toJSON();
		table = renderTpl(tmplFullForm(), studentJSON);

	    containerTable = document.createElement('div');
        containerTable.innerHTML = table;
        container.appendChild(containerTable);

        buttonClose = container.querySelector('button.closeFullForm');
	    buttonClose.addEventListener('click', hideInfoStudent, false);
		return container;
	}

    function hideInfoStudent () {
    	buttonClose.removeEventListener('click', hideInfoStudent);
    	container.innerHTML = '';
    }
    mediator.sub('getStudentData', showStudentForm);	
}
