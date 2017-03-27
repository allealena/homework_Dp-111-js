'use strict';
function ControllerStudentList () {
    var group,
        tableContent,
        studentFullInfo,
        studentEdit;

    group = new StudentsList();

    group.add(student1);
    group.add(student2);
    group.add(student3);
    group.add(student4);
    group.add(student5);
    group.add(student6);

    tableContent = new TableView({collection: group});
    showTableContent();
    
    function showTableContent () {
        var tableView = tableContent.render();
        implement('table', tableView.el);
    }

    function showInfoView (student) {
        studentFullInfo = new FullInfoView({model: student});
        var innerContainer = studentFullInfo.render();
        implement('fullInfo', innerContainer.el);
    }

    function showEditStudent (student) {
        studentEdit = new EditFormView({model: student});
        var editView = studentEdit.render();
        implement('editForm', editView.el);
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
        location = $(adress).html(view);
    }

    mediator.sub('getStudentData', showInfoView);
    mediator.sub('editStudentData', showEditStudent);    
}
