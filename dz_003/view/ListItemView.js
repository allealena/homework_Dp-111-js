function ListItemView (student, mediator) {
	var listItem,
	    row,
	    buttonMore,
	    more,
	    edit,
	    tdButtonMore,
	    tdButtonEdit,
	    buttonEdit,
	    studentJSON,
	    container,
	    newRow;

	    row = document.createElement('tr');

	function createRow () {
	    studentJSON = student.toJSON();
	    listItem = renderTpl(tmplRowTable(), studentJSON);

	    row.innerHTML = listItem;

	    buttonMore = document.createElement('button');
	    more = document.createTextNode('more');
	    tdButtonMore = document.createElement('td');
	    buttonMore.appendChild(more);
	    tdButtonMore.appendChild(buttonMore);
	    row.appendChild(tdButtonMore);	    

	    buttonEdit = document.createElement('button');
	    edit = document.createTextNode('edit');
	    tdButtonEdit = document.createElement('td');
	    buttonEdit.appendChild(edit);
	    tdButtonEdit.appendChild(buttonEdit);
	    row.appendChild(tdButtonEdit);

	    buttonMore.addEventListener('click', showInfoStudent, false);
	    buttonEdit.addEventListener('click', showEditForm, false);
	    
	    return row;
	}

	this.showItem = function () {
        createRow();

	    student.addListener('update', updateInfo);
	 
        return row;
	}

	function updateInfo () {
		container = row.parentNode;

        buttonMore.removeEventListener('click', showInfoStudent, false);
	    buttonEdit.removeEventListener('click', showEditForm, false);
        
        newRow = createRow();
        container.replaceChild(newRow, row);
	}

	function showInfoStudent () {
		mediator.triggerEvent('getStudentData', student);
	}

	function showEditForm () {
		mediator.triggerEvent('editStudentData', student);
	}
}
