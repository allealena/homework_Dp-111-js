'use strict';
function FullInfoView (student) {
	var table = renderTpl(tmplFullForm(), student),
	    container = document.getElementById('card'),
	    buttonClose = document.createElement('button'),
	    close = document.createTextNode('close'),
	    containerTable = document.createElement('div');

        containerTable.innerHTML = table;
	    buttonClose.appendChild(close);
	    containerTable.appendChild(buttonClose);

	buttonClose.addEventListener('click', hideInfoStudent, false);

	this.showStudent = function () {
		container.innerHTML = '';
		container.appendChild(containerTable);
	}

    function hideInfoStudent () {
    	container.innerHTML = '';
    }
}