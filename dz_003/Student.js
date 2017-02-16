function Student (nameSt, surnameSt, genderSt, skypeSt, birthYearSt, birthMonthSt, birthDateSt) {
    var birthday = new Date(birthYearSt, birthMonthSt-1, birthDateSt),
        student = {},
        studentJSON = {},
        propertyStudent = [
        {name: nameSt},
        {surname: surnameSt},
        {gender: genderSt},
        {skype: skypeSt}
        ],
        personeAge,
        today,
        monthBirth;
    
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
        student.name = propertyStudent[0].name;
        student.surname = propertyStudent[1].surname;
        student.gender = propertyStudent[2].gender;
        student.skype = propertyStudent[3].skype;
        student.age = personeAge;
        student.fullName = student.name + ' ' + student.surname;

        for (var key in student) {
            studentJSON[key] = student[key];
        }
        return studentJSON;
    }

    this.setProperty = function (property, value) {
        for (var key in propertyStudent) {
            var prop = propertyStudent[key];
            console.log(prop[0]);
        }
        property = value;
        console.log(property);
        console.log(value);
    }
}