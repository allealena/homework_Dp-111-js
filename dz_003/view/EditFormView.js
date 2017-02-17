function EditFormView (student) {
    var formContainer = document.getElementById('editForm'),
        formInner,
        form,
        buttonSave,
        buttonClose,
        formInputs,
        prop,
        editData = [];

	this.showEditStudent = function () {
	    formInner = tmplForm();
	    formContainer.innerHTML = formInner;
	    
	    buttonSave = document.querySelector('.button_save');
	    form = document.querySelector('.form');
	    formInputs = form.querySelectorAll('input');
	    
	    [].forEach.call(formInputs, function (item) {
	    	prop = item.name;
	    	item.value = student[prop];
	    })
        buttonSave.addEventListener('click', saveChanges, false);
	}
    	
    function saveChanges () {
        [].forEach.call(formInputs, function (item) {
            editData.push(item.value);
        })    
        this.changeData = editData; 
   }
}


