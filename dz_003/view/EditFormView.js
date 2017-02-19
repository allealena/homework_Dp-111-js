function EditFormView (studentJSON, student, tableRow) {
    var formContainer = document.getElementById('editForm'),
        editData = {},
        formInner,
        form,
        buttonSave,
        buttonClose,
        formInputs,
        prop,
        newInfo,
        viewStudent,
        updateRow,
        parentTable,
        updateInfoStudent,
        property;

	this.showEdit = function () {
	    formInner = tmplForm();
	    formContainer.innerHTML = formInner;
	    
	    buttonSave = document.querySelector('.button_save');
        buttonSave.addEventListener('click', saveChanges, false);

	    form = document.querySelector('.form');
	    formInputs = form.querySelectorAll('input');
	    
	    [].forEach.call(formInputs, function (item) {
	    	prop = item.name;
	    	item.value = studentJSON[prop];
	    })
	}

	this.closeEdit = function () {
		buttonClose = document.querySelector('.button_close');
		buttonClose.addEventListener('click', hideEdit, false);
	}

	function hideEdit () {
		formContainer.innerHTML = '';
	}
    	
    function saveChanges () {
        [].forEach.call(formInputs, function (item) { 
        property = item.name;           
        editData[property] = item.value;
        })  
        
        student.setProperty(editData);
        
        newInfo = student.toJSON();
        viewStudent = new ListItemView(newInfo, student);
        updateRow = viewStudent.showItem();
        parentTable = tableRow.parentNode;
        parentTable.replaceChild(updateRow, tableRow)

        updateInfoStudent = new FullInfoView(studentJSON);
        updateInfoStudent.showStudent();   
        hideEdit();
    }
}


