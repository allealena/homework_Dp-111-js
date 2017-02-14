function ListItemView (student) {
	var listItem,
	    row,
	    button,
	    more,
	    tdButton,
	    fullForm;

	this.showItem = function () {
	    listItem = renderTpl(tmplRowTable(), student);
	    
	    row = document.createElement('tr');
	    button = document.createElement('button');
	    more = document.createTextNode('more');
	    button.appendChild(more);
	    tdButton = document.createElement('td');
	    tdButton.appendChild(button);
	    row.innerHTML = listItem;
	    row.appendChild(tdButton);

	    button.addEventListener('click', showInfoStudent, false);
	    return row;
	}

	function showInfoStudent () {
        fullForm = new FullInfoView(student);
        fullForm.showStudent();
	}
}
