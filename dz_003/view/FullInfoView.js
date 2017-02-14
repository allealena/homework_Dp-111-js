'use strict';
function FullInfoView (student) {
	var table = renderTpl(tmplFullForm(), student),
	    container = document.getElementById('card');

	container.addEventListener('click', hideInfoStudent, false);

	this.showStudent = function () {
		container.innerHTML = table;
	}

    function hideInfoStudent () {
    	container.innerHTML = '';
    }
}