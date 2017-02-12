function tmplFullForm (studentProps, student) {
    var property = '<tr>',
        card = '',
        tplRow = tmplItem(studentProps),
        row = '<tr>',
        name = student.name,
        surname = student.surname,
        age = student.age,
        gender = student.gender,
        skype = student.skype;
    
    studentProps.forEach(function (item) {
        property += '<th>' + item + '</th>';
    })
    property += '</tr>';

    row += tplRow.replace('name', name).replace('surname', surname).replace('age', age).replace('gender', gender).replace('skype', skype);  
    row += '</tr>';
    card = '<table>' + property + row + '</table>';
    return card;
}