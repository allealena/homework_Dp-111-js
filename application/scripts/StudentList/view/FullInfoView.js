'use strict';
function FullInfoView () {
	var container = this.createContainer('div');
	var tpl = tmplFullForm();

	this.createInner = function (student) {
		var innerContainer;
		
		if (container) {
    	    container.innerHTML = '';
		}

		innerContainer = this.createInnerContaier(student, tpl);
        this.addEvent('button.closeFullForm', removeInfoStudent);

        function removeInfoStudent () {
            container.innerHTML = '';
        }
        return innerContainer;
	}	
};

extend(FullInfoView, View);


/*function FullInfoView () {
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
}*/
