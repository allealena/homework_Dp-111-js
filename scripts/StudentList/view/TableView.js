'use strict';
function TableView (studentList, content) {
	var table = document.createElement('table'),
	    header = tmplTableHeader(),
	    student;

	table.innerHTML = header;
	table.classList.add('studentsList');
	content.appendChild(table);          

	this.showInfo = function () {
		studentList.forEach(function (item) {
			student = new ListItemView(item);
            student.showItem();
		})
    }           
    return this; 
}