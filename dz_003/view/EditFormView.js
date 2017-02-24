'use strict';
function EditFormView (container, mediator) {
    var formContainer = document.getElementById('editForm'),
        editData = {},
        formInner,
        form,
        buttonSave,
        buttonClose,
        formInputs,
        prop,
        property,
        studentJSON,
        studentCurrent;


	function showEdit (student) {
        studentCurrent = student;
        studentJSON = student.toJSON();
	    formInner = tmplForm();
	    container.innerHTML = formInner;
	    
	    buttonSave = document.querySelector('.button_save');
        buttonSave.addEventListener('click', saveChanges, false);

        buttonClose = document.querySelector('.button_close');       
        buttonClose.addEventListener('click', hideEdit, false);

	    form = document.querySelector('.form');
	    formInputs = form.querySelectorAll('input');
	    
	    [].forEach.call(formInputs, function (item) {
	    	prop = item.name;
	    	item.value = studentJSON[prop];
	    })
	}

	function hideEdit () {        
        buttonClose.removeEventListener('click', hideEdit);
        buttonSave.removeEventListener('click', saveChanges);

		container.innerHTML = '';
	}
    	
    function saveChanges () {
        [].forEach.call(formInputs, function (item) { 
        property = item.name;           
        editData[property] = item.value;
        })  
        
        studentCurrent.setProperty(editData);
  
        hideEdit();
    }
    
    mediator.on('editStudentData', showEdit);    
}


