'use strict';
function EditFormView () {
    var editData = {},
        containerForm = document.createElement('div'),
        formInner,
        form,
        buttonSave,
        buttonClose,
        formInputs,
        prop,
        property,
        studentJSON,
        studentCurrent;

	this.showEdit = function (student) {
        studentCurrent = student;
        studentJSON = student.toJSON();
	    formInner = tmplForm();
	    containerForm.innerHTML = formInner;
	    
	    buttonSave = containerForm.querySelector('.button_save');
        buttonSave.addEventListener('click', saveChanges, false);

        buttonClose = containerForm.querySelector('.button_close');       
        buttonClose.addEventListener('click', hideEdit, false);

	    form = containerForm.querySelector('.form');
	    formInputs = form.querySelectorAll('input');
	    
	    [].forEach.call(formInputs, function (item) {
	    	prop = item.name;
	    	item.value = studentJSON[prop];
	    })
        return containerForm;
	}

	function hideEdit () {        
        buttonClose.removeEventListener('click', hideEdit);
        buttonSave.removeEventListener('click', saveChanges);

		containerForm.parentNode.innerHTML = '';
	}
    	
    function saveChanges () {
        [].forEach.call(formInputs, function (item) { 
        property = item.name;           
        editData[property] = item.value;
        })  

        studentCurrent.setProperty(editData); 
        hideEdit();
    }   
}


