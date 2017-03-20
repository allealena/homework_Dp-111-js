'use strict';
window.addEventListener('load', startApp, false);

function startApp () {
	var group = new StudentsList;
    group.add(student1);
    group.add(student2);
    group.add(student3);
    group.add(student4);
    group.add(student5);
    group.add(student6);

	var groupTableView = new TableView({collection: group});
    $('#studentList #content').append(groupTableView.render().el);

    var countriesNav = new ViewNavigation();
    $('.buttons').append(countriesNav.render().el);
    var countriesCollection = collection();

    var countries = new Countries(countriesCollection);
    console.log(countries);
    var listCountries = new ViewCountries({collection: countries});
    $('.countries').append(listCountries.render().el)

   /* var controlStudentList = new ControllerStudentList(),
        controlColorBlock = new ControllerColorBlock(),
        controlCounty = new ControllerCountry();  */  
}




