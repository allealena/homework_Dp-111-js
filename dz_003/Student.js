function Student (name, surname, gender, skype, birthYear, birthMonth, birthDate) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.skype = skype;
    this.birthday = new Date(birthYear, birthMonth-1, birthDate);
    this.fullName = this.name + ' ' + this.surname;

    var personeAge;
    getAge();

    function getAge () {
    	var today = new Date(),
    	    monthBirth = today.getMonth() - (birthMonth-1);
    	
        personeAge = today.getFullYear() - birthYear;
    	if (monthBirth < 0 || (monthBirth === 0 && today.getDate() < birthDate)) {
            personeAge--;
    	}
    }

    this.age = personeAge;

    return this;
}