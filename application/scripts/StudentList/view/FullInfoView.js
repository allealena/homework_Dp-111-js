'use strict';
function FullInfoView () {
	var table,
	    buttonClose,
	    containerTable,
	    studentJSON;

	this.showStudentForm = function (student) {
		if (containerTable) {
    	containerTable.parentNode.innerHTML = '';			
		}

		studentJSON = student.toJSON();
		table = renderTpl(tmplFullForm(), studentJSON);

	    containerTable = document.createElement('div');
        containerTable.innerHTML = table;

        buttonClose = containerTable.querySelector('button.closeFullForm');
	    buttonClose.addEventListener('click', removeInfoStudent, false);
		return containerTable;
	}

    function removeInfoStudent () {
    	buttonClose.removeEventListener('click', removeInfoStudent);
    	containerTable.parentNode.innerHTML = '';
    }
}
