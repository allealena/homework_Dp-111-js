'use strict';
function EditFormView () {
    var containerForm = this.createContainer('div'),
        formInputs,
        formInner,
        studentCurrent,
        these = this;        

    this.showEdit = function (student) {
        var form,
            prop,
            studentJSON = student.toJSON(),
            tpl = tmplForm();
        studentCurrent = student;
        
        formInner = this.createInnerContaier(student, tpl);
        this.addEvent('.button_save', saveChanges);
        this.addEvent('.button_close', hideEdit);

        form = formInner.querySelector('.form');
        formInputs = form.querySelectorAll('input');
        
        [].forEach.call(formInputs, function (item) {
            prop = item.name;
            item.value = studentJSON[prop];
        })
        return formInner;
    };

    function hideEdit () {  
        these.removeEvent('.button_save', saveChanges);
        these.removeEvent('.button_close', hideEdit);
        formInner.parentNode.innerHTML = '';
    }
        
    function saveChanges () {
        var editData = {},
            property;
        [].forEach.call(formInputs, function (item) { 
        property = item.name;           
        editData[property] = item.value;
        })  

        studentCurrent.setProperty(editData); 
        hideEdit();
    }   
}
extend(EditFormView, View);

