function StudentsList (students) {

	this.students = students;
	
	this.showStudentsList = function (contentId) {
		
		var	table = '<table>',
		    header = '<thead><tr>',
		    tableBody = '<tbody>';

		this.contentId = contentId;

		//create a tablehead
	    for (var key in this.students[0]) {
		    header += '<th>' + key + '</th>';
	    }
	    header += '</tr></thead>';

	    //create a tablebody
	    for (var key in this.students) {
		    tableBody += '<tr>';

		    for (var item in this.students[key]){
			    tableBody += '<td>' + this.students[key][item] + '</td>';
		    }

		    tableBody += '</tr>';
	    }

	    tableBody += '</tbody>';
	    table += header + tableBody + '</table>';
	    
	    this.contentId.innerHTML = table;
	}
}