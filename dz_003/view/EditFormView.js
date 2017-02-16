function EditFormView (student, properties) {
    var formContainer = document.getElementById('editForm'),
        studentData = [],
        formInner,
        form,
        buttonSave,
        save,
        buttonClose,
        close,
        formStudent,
        formElements;

    this.editData;

	this.showEditStudent = function () {
	    formInner = tmplForm();
	    form = document.createElement('form');
	    form.innerHTML = formInner;
	    buttonSave = document.createElement('button');
	    save = document.createTextNode('save');
	    buttonSave.appendChild(save);
	    buttonSave.value = 'save';
	    buttonClose = document.createElement('button');
	    close = document.createTextNode('close');
	    buttonClose.appendChild(close);
	    buttonClose.value = 'close';
	    form.appendChild(buttonClose);
	    form.appendChild(buttonSave);
	    formContainer.appendChild(form);
	    formStudent = document.forms[0];

        buttonSave.addEventListener('click', saveChanges, false);

        formElements = formStudent.elements;

	    formStudent.elements.name.value = student.name;
	    formStudent.elements.surname.value = student.surname;
	    formStudent.elements.skype.value = student.skype;
	}

    function saveChanges () {
        [].forEach.call(formElements, function (item) {
        	 	if (item.name) {
        	 		student.setProperty(item.name, item.value);
        	 		console.log(item.name);
        	 		console.log(item.value);
                /*studentData.push(item.value);
                console.log(item.value);*/
                }
        	/*console.log(properties[key]);*/
	    })

/*	    console.log(studentData);	
*/
/*	    return studentData;
*/    }
}



 /*       '<input type="button" value="save">\n' +
        '<input type="button" value="close">*/