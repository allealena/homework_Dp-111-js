function tmplItem (studentProps) {
    var tplItem = '';
    studentProps.forEach(function (item) {
        tplItem += '<td>' + item + '</td>';
	})
    return tplItem;
}

