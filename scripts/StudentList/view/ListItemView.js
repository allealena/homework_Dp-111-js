'use strict';
function ListItemView (student) {
	var table = document.querySelector('table.studentsList'),
	    row = document.createElement('tr'),	    
	    listItem,
	    buttonMore,
	    buttonEdit,
	    studentJSON,
	    newRow;

	function createRow () {
	    studentJSON = student.toJSON();
	    listItem = renderTpl(tmplRowTable(), studentJSON);
	    row.innerHTML = listItem;	    
	    return row;
	}

	this.showItem = function () {
        createRow();
        table.appendChild(row);
        addEvent(); 
	    student.addListener('update', updateInfo);
	}

	function addEvent () {
		buttonMore = row.querySelector('button.more');
		buttonEdit = row.querySelector('button.edit');
		buttonMore.addEventListener('click', showInfoStudent, false);
	    buttonEdit.addEventListener('click', showEditForm, false);
	}

	function updateInfo () {
        buttonMore.removeEventListener('click', showInfoStudent, false);
	    buttonEdit.removeEventListener('click', showEditForm, false);
        
        newRow = createRow();
        table.replaceChild(newRow, row);
        addEvent();
	}

	function showInfoStudent () {
		mediator.pub('getStudentData', student);
	}

	function showEditForm () {
		mediator.pub('editStudentData', student);
	}
}
