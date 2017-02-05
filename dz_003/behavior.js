var studentId;

function showInfo (event) {
    var dataStudent,
        target;
    
    if (studentId) {
       studentId.style.display = '';
      }

    target = event.target;
        	     	
    if (target.tagName === 'BUTTON') {
      	dataStudent = target.getAttribute('data-student');
       	studentId = document.getElementById(dataStudent);
       	studentId.style.display = 'block';
    }
}