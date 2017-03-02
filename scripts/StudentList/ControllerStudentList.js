'use strict';
function ControllerStudentList () {
    var cardLocation,
        editFormLocation,
        tableLocation,
        group,
        tableContent,
        studentFullInfo,
        studentEdit;

    group = new StudentsList();

    tableLocation = implement('table');
    tableContent = new TableView(group, tableLocation);

    tableContent.showInfo();
        
    cardLocation = implement('fullInfo');
    studentFullInfo = new FullInfoView(cardLocation);

    editFormLocation = implement('editForm');
    studentEdit = new EditFormView(editFormLocation);

    function implement (name) {
        var adress,
            location,
            coord = {
                fullInfo: 'card',
                editForm: 'editForm',
                table: 'content'
            }
        adress = coord[name];
        location = document.getElementById(adress);
        return location;
    }
}