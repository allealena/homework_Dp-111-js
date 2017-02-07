function Student (name, surname, gender, skype, age) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.skype = skype;
    this.age = age;
    this.fullName = this.name + ' ' + this.surname;
     
    return this;
}