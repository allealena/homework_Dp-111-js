'use strict';
function TableView (studentList) {
	var table = document.createElement('table'),
	    header = tmplTableHeader(),
	    student;

	this.createTable = function () {
	    table.innerHTML = header;
	    table.classList.add('studentsList');  
        return table;
	}        

	this.showInfo = function () {
		studentList.forEach(function (item) {
			student = new ListItemView(item);
            student.showItem();
		})
    }            
}