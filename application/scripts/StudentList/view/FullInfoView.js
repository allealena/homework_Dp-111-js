'use strict';
function FullInfoView () {
	var buttonClose,
	    containerTable,
	    studentJSON;

	this.showStudentForm = function (student) {
		var table;
		if (containerTable) {
    	containerTable.innerHTML = '';			
		}

		studentJSON = student.toJSON();
		table = renderTpl(tmplFullForm(), studentJSON);

	    containerTable = document.createElement('div');
        containerTable.innerHTML = table;

        buttonClose = containerTable.querySelector('button.closeFullForm');
	    buttonClose.addEventListener('click', removeInfoStudent, false);
		return containerTable;
	};

    function removeInfoStudent () {
    	buttonClose.removeEventListener('click', removeInfoStudent);
    	containerTable.innerHTML = '';
    }
}
