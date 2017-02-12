function ItemView (studentProperties, student) {
	var row = '';
    studentProperties.forEach(function(item) {
        row += tmplItem(student[item]);
    });

    this.row = row;
    return this;
}

