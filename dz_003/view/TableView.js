function TableView (studentList) {
	var content = document.getElementById('content'),
	    studentCollection = studentList['list'],
	    table = document.createElement('table'),
	    header = tmplTableHeader(),
	    studentItem,
	    item,
	    row;

	table.innerHTML = header;

	this.showInfo = function () {
	    for (var key in studentCollection) {
            studentItem = studentCollection[key];
            item = new ListItemView(studentItem);
            row = item.showItem(); 
            table.appendChild(row);
        } 
    content.appendChild(table);          
    }  
     
    return this; 
}