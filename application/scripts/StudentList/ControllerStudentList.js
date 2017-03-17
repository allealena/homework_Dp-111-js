'use strict';
function ControllerStudentList () {
    var group,
        tableContent,
        studentFullInfo,
        studentEdit;

    group = new StudentsList();
    tableContent = new TableView(group);
    showTableContent();
    studentFullInfo = new FullInfoView();
    studentEdit = new EditFormView();

    function showTableContent () {
        var tableView = tableContent.createTable();
        implement('table', tableView);
        tableContent.showInfo();
    }

    function showInfoView (student) {
        var innerContainer = studentFullInfo.createInner(student);
        implement('fullInfo', innerContainer);
    }

    function showEditStudent (student) {
        var editView = studentEdit.showEdit(student);
        implement('editForm', editView);
    }

    function implement (name, view) {
        var adress,
            location,
            coord;
        coord = {
            fullInfo: '#card',
            editForm: '#editForm',
            table: '#content'
        }
        adress = coord[name];
        location = $(adress).append(view);
    }
    mediator.sub('getStudentData', showInfoView);
    mediator.sub('editStudentData', showEditStudent);    
}
/*'use strict';
function ControllerStudentList () {
    var group,
        tableContent,
        studentFullInfo,
        studentEdit;

    group = new StudentsList();
    tableContent = new TableView(group);
    showTableContent();
    studentFullInfo = new FullInfoView();
    studentEdit = new EditFormView();

    function showTableContent () {
        var tableView = tableContent.createTable();
        implement('table', tableView);
        tableContent.showInfo();
    }

    function showInfoView (student) {
        var infoView = studentFullInfo.showStudentForm(student);
        implement('fullInfo', infoView);
    }

    function showEditStudent (student) {
        var editView = studentEdit.showEdit(student);
        implement('editForm', editView);
    }

    function implement (name, view) {
        var adress,
            location,
            coord;
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
}*/