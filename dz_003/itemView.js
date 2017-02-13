function ItemView (studentProperties, student) {
    this.row = '';
    studentProperties.forEach(function(item) {
        row += tmplItem(student[item]);
    });

    return this;
}

