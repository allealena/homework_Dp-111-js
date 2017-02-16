function TableView (studentList) {
	var studentCollection = studentList['list'],
	    properties = studentList['listProps'],
	    table = document.createElement('table'),
	    header = tmplTableHeader(),
	    studentProperties,
	    studentItem,
	    item,
	    row;

	table.innerHTML = header;

	this.showInfo = function () {
	    for (var key in studentCollection) {
            studentItem = studentCollection[key].toJSON();
            studentProperties = properties[key];
            item = new ListItemView(studentItem, studentProperties);
            row = item.showItem(); 
            console.log(studentProperties);
            table.appendChild(row);
        }
    
    return table;
    }
}