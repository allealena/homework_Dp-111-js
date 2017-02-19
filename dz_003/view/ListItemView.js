function ListItemView (studentJSON, student) {
	var listItem,
	    row,
	    buttonMore,
	    more,
	    edit,
	    tdButtonMore,
	    tdButtonEdit,
	    buttonEdit,
	    fullForm,
	    editForm;

	this.showItem = function () {
	    listItem = renderTpl(tmplRowTable(), studentJSON);
	    
	    row = document.createElement('tr');
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

	function showInfoStudent () {
        fullForm = new FullInfoView(studentJSON);
        fullForm.showStudent();
	}

	function showEditForm () {
		editForm = new EditFormView(studentJSON, student, row);
		editForm.showEdit();	
		editForm.closeEdit();
	}
}
