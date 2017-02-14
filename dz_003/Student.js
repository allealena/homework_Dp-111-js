function Student (name, surname, gender, skype, birthYear, birthMonth, birthDate) {
    var birthday = new Date(birthYear, birthMonth-1, birthDate),
        studentJSON = {},
        nameSt = name,
        surnameSt = surname,
        genderSt = gender,
        skypeSt = skype,
        personeAge,
        today,
        monthBirth;
    
    getAge();

    function getAge () {
        today = new Date();
        monthBirth = today.getMonth() - (birthMonth-1);
    	
        personeAge = today.getFullYear() - birthYear;
    	if (monthBirth < 0 || (monthBirth === 0 && today.getDate() < birthDate)) {
            personeAge--;
    	}
    }

    this.toJSON = function () {        
        studentJSON.name = nameSt;
        studentJSON.surname = surnameSt;
        studentJSON.gender = genderSt;
        studentJSON.skype = skypeSt;
        studentJSON.age = personeAge;
        studentJSON.fullName = studentJSON.name + ' ' + studentJSON.surname;

        return studentJSON;
    }
}