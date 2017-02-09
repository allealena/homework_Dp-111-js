function showStudentsList (contentId, headerCaption, studentList) {		
	var	table = '<table>',
		header = '<thead><tr>',
		tableBody = '<tbody>',
		headerButton = '<th>more</th>',
		tRows = '',
		tableRow,
		studentItem,
		list;
	//create a tablehead
	headerCaption.forEach(function(item) {
		header += '<th>' + item + '</th>';
	})
	header += headerButton + '</tr></thead>';
	//create a tablebody
	list = studentList["list"];

    for (var key in list) {
    	tableRow = new ItemView(headerCaption, list[key]);
    	tRows += '<tr>' + tableRow.row +
    	'<td><button ' +'data-student=' + key + 
    	'>more</button></td>' + '</tr>';
    }
    tableBody += tRows + '</tbody>';
    table += header + tableBody + '</table>';   
	contentId.innerHTML = table;
}

function getFullForm (studentList, studentProps, studentItem, cardId) {
    var list = studentList['list'],
        item = studentList.list[studentItem],
        studentCard = new ItemView(studentProps, item),
        property = '<tr>',
        card = '';

    studentProps.forEach(function(item) {
        property += '<th>' + item + '</th>';
    })

    property += '</tr>';
    card = '<table>' + property + '<tr>' + studentCard.row + '</tr>' + '</table>'
    cardId.innerHTML = card;
}








 

