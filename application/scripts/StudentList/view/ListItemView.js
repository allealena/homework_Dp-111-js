'use strict';
function ListItemView (student) {
	var table = $('table.studentsList'),
	    row = this.createContainer('tr'),	    	    
	    rowContainer,
	    these = this;

	this.showItem = function () {
        rowContainer = this.createInnerContaier(student, tmplRowTable());
        table.append(rowContainer);
        this.addEvent('button.more', showInfoStudent); 
        this.addEvent('button.edit', showEditForm); 
	    student.addListener('update', updateInfo);
	};

	function updateInfo () {
		var newRow;
        these.removeEvent('button.more', showInfoStudent);
        these.removeEvent('button.edit', showEditForm); 
        newRow = these.createInnerContaier(student, tmplRowTable());
        row.replaceWith(newRow);
        these.addEvent('button.more', showInfoStudent); 
        these.addEvent('button.edit', showEditForm); 
	}

	function showInfoStudent () {
		mediator.pub('getStudentData', student);
	}

	function showEditForm () {
		mediator.pub('editStudentData', student);
	}
}

extend(ListItemView, View);