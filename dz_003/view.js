function showStudentsList (contentId, headerCaption, studentList) {
		
	var	table = '<table id="tableStudents">',
		header = '<thead><tr>',
		tableBody = '<tbody>',
		studentItem,
		number,
		list;

	//create a tablehead
	headerCaption.forEach(function(item) {
		header += '<th>' + item + '</th>';
	})
	header += '</tr></thead>';

	//create a tablebody
	list = studentList["list"];

	for (var key in list) {	    
		tableBody += '<tr>';
		studentItem = list[key];
		number = Number(key) + 1;
		   
		for (var i in studentItem) {
			tableBody += '<td>' + studentItem[i] + '</td>';
		}
		tableBody += '<td><button ' +'data-student="student' + number + '">more</button></td>'+'</tr>';		    
	}

	tableBody += '</tbody>';
	table += header + tableBody + '</table>';
	    
	contentId.innerHTML = table;
}
