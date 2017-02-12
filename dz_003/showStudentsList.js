function showStudentsList (contentId, headerCaption, studentList, studentsFullProp) {		
	var	cardMore = document.getElementById('card'),
        list = studentList["list"],
        dataStudent,
		studentItem,
        target,
        buttons;

    createTable();
    addEventBtn('button');	
	
    function createTable () {
        var tableContent;        
        tableContent = tmplTable(headerCaption, list);
	    contentId.innerHTML = tableContent;
    }

    function getFullForm (studentProps, student, cardId) {
        var fullForm;
        fullForm = tmplFullForm(studentProps, student);
        cardId.innerHTML = fullForm;
}

    function showInfo () {
        var studentName = this.name;
        list.forEach(function (item) {
            if (item.name === studentName) {
                getFullForm(studentsFullProp, item, cardMore);
            }
        })
    }

    function addEventBtn (tagName) {
        buttons = document.getElementsByTagName(tagName);        
        
        [].forEach.call(buttons, function (item) {
        item.addEventListener('click', showInfo, false);
        })
    }
    
    function hideInfo () {
        cardMore.innerHTML = '';
    }

    cardMore.addEventListener('click', hideInfo, false);
}   












 

