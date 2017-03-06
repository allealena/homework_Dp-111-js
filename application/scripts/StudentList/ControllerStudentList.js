'use strict';
function ControllerStudentList () {
    var group,
        tableContent,
        studentFullInfo,
        studentEdit,
        tableView,
        infoView,
        editView,
        adress,
        location,
        coord;

    group = new StudentsList();
    tableContent = new TableView(group);
    showTableContent();
    studentFullInfo = new FullInfoView();
    studentEdit = new EditFormView();

    function showTableContent () {
        tableView = tableContent.createTable();
        implement('table', tableView);
        tableContent.showInfo();
    }

    function showInfoView (student) {
        infoView = studentFullInfo.showStudentForm(student);
        implement('fullInfo', infoView);
    }

    function showEditStudent (student) {
        editView = studentEdit.showEdit(student);
        implement('editForm', editView);
    }

    function implement (name, view) {
        coord = {
            fullInfo: 'card',
            editForm: 'editForm',
            table: 'content'
        }
        adress = coord[name];
        location = document.getElementById(adress);
        location.appendChild(view);
    }
    mediator.sub('getStudentData', showInfoView);
    mediator.sub('editStudentData', showEditStudent);    
}