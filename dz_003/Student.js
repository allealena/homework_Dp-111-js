function Student (nameSt, surnameSt, genderSt, skypeSt, birthYearSt, birthMonthSt, birthDateSt) {
    var birthday = new Date(birthYearSt, birthMonthSt-1, birthDateSt),
        student = {},
        studentJSON = {},
        propertyStudent = {
        name: nameSt,
        surname: surnameSt,
        gender: genderSt,
        skype: skypeSt
        },
        personeAge,
        today,
        monthBirth,
        listeners = {
            update: []
        };
    
    getAge();

    function getAge () {
        today = new Date();
        monthBirth = today.getMonth() - (birthMonthSt-1);
    	
        personeAge = today.getFullYear() - birthYearSt;
    	if (monthBirth < 0 || (monthBirth === 0 && today.getDate() < birthDateSt)) {
            personeAge--;
    	}
    }

    this.toJSON = function () {           
        student.name = propertyStudent.name;
        student.surname = propertyStudent.surname;
        student.gender = propertyStudent.gender;
        student.skype = propertyStudent.skype;
        student.age = personeAge;
        student.fullName = student.name + ' ' + student.surname;

        for (var key in student) {
            studentJSON[key] = student[key];
        }
        return studentJSON;
    }

    this.setProperty = function (changeData) {
        for (var key in propertyStudent) {
            if (changeData[key]) {
                propertyStudent[key] = changeData[key];
            }
        }
        this.triggerEvent('update');
    }

    this.addListener = function (evt, callback) {
        if (!listeners[evt]) {
            listeners[evt] = [];
        }
        listeners[evt].push(callback);
    }

    this.triggerEvent = function (evt) {
        if (listeners[evt]) {
            listeners[evt].forEach(function (callback) {
                callback();
            })
        }
    }
}