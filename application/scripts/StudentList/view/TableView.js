'use strict';
function TableView (studentList) {
	this.createTable = function () {
		var table = document.createElement('table'),
	    header = tmplTableHeader();
	    table.innerHTML = header;
	    table.classList.add('studentsList');  
        return table;
	};        

	this.showInfo = function () {
		var student;
		studentList.forEach(function (item) {
			student = new ListItemView(item);
            student.showItem();
		})
    };            
}