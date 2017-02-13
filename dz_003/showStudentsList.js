function showStudentsList (contentId, headerCaption, studentList, studentsFullProp) {		
    var	cardMore = document.getElementById('card'),
        list = studentList['list'],
        buttons,
        tableContent,
        fullForm,
        studentName;

    createTable();
    addEventBtn('button');
    cardMore.addEventListener('click', hideInfo, false);	
	
    function createTable () {
        tableContent = tmplTable(headerCaption, list);
        contentId.innerHTML = tableContent;
    }

    function getFullForm (studentProps, student, cardId) {
        fullForm = tmplFullForm(studentProps, student);
        cardId.innerHTML = fullForm;
}

    function showInfo () {
        studentName = this.name;
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
}   












 

