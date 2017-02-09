function ItemView (studentProperties, student) {
	var row = '';
    studentProperties.forEach(function(item) {
        row += '<td>' + student[item] + '</td>';
    });

    this.row = row;
    return this;
}


