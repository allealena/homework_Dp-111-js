function tmplTable (headerCaption, list) {
    var tplTable = '<table><thead><tr><th>FullName</th><th>Gender</th><th>Skype</th><th>More</th></tr></thead><tbody>',
        tplRow = tmplItem(headerCaption),
        row ='',
        fullName,
        gender,
        skype;

    list.forEach(function (item) {
            fullName = item.fullName;
            gender = item.gender;
            skype = item.skype;
            row = '<tr>';

        row += tplRow.replace('fullName', fullName).replace('gender', gender).replace('skype', skype);
        row += '<td><button ' +'name="' + item.name +'">more</button></td></tr>';

        tplTable += row;
    })
    
    tplTable += '</tbody></table>';

    return tplTable;
    }