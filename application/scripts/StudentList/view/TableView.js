'use strict';
function TableView (studentList) {
	this.createTable = function () {
		var header = tmplTableHeader(),
		    table = $('<table></table>')
		        .html(header)
		        .addClass('studentsList');
		        
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