var countries = require('./countries'),
    students = require('./students');

var countryList = JSON.stringify(countries);
var countriesCol = countryList.slice();

function getCountries () {
    return countriesCol;   
}

function getStudents () {
	var studentList = JSON.stringify(students);
	return studentList;
}

function removeCountry (id) {
    console.log(id);
    /*countriesCol.splice(id-1, 1);*/
}

exports.getCountries = getCountries;
exports.getStudents = getStudents;
exports.removeCountry = removeCountry;

