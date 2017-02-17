function ListItemView (student) {
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
	    listItem = renderTpl(tmplRowTable(), student);
	    
	    row = document.createElement('tr');
	    buttonMore = document.createElement('button');
	    buttonEdit = document.createElement('button');
	    more = document.createTextNode('more');
	    edit = document.createTextNode('edit');
	    buttonMore.appendChild(more);
	    tdButtonMore = document.createElement('td');
	    tdButtonEdit = document.createElement('td');
	    tdButtonMore.appendChild(buttonMore);
	    row.innerHTML = listItem;
	    row.appendChild(tdButtonMore);
	    buttonEdit.appendChild(edit);
	    tdButtonEdit.appendChild(buttonEdit);
	    row.appendChild(tdButtonEdit);

	    buttonMore.addEventListener('click', showInfoStudent, false);
	    buttonEdit.addEventListener('click', showEditForm, false);
	    return row;
	}

	function showInfoStudent () {
        fullForm = new FullInfoView(student);
        fullForm.showStudent();
	}

	function showEditForm () {
		editForm = new EditFormView(student);
		editForm.showEditStudent();	
		
		console.log(editForm.changeData);
	}
}
