'use strict';
function EditFormView () {
    var containerForm = document.createElement('div'),
        buttonSave,
        buttonClose,
        formInputs,
        studentCurrent;

	this.showEdit = function (student) {
        var formInner,
            form,
            prop,
            studentJSON;
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
	};

	function hideEdit () {        
        buttonClose.removeEventListener('click', hideEdit);
        buttonSave.removeEventListener('click', saveChanges);

		containerForm.parentNode.innerHTML = '';
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


