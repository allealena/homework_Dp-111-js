function TableView (studentList) {
	var studentCollection = studentList['list'],
	    table = document.createElement('table'),
	    header = tmplTableHeader(),
	    studentItem,
	    item,
	    row;

	table.innerHTML = header;

	this.showInfo = function () {
	    for (var key in studentCollection) {
            studentItem = studentCollection[key].toJSON();
            item = new ListItemView(studentItem);
            row = item.showItem(); 
            table.appendChild(row);
        }
    return table;
    }
}