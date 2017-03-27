'use strict';
var  mediator = new Mediator();
window.addEventListener('load', startApp, false);

function startApp () {
	

	/*
    var countriesNav = new ViewNavigation();
    $('.buttons').append(countriesNav.render().el);
    var countriesCollection = collection();

    var countries = new Countries(countriesCollection);
    console.log(countries);
    var listCountries = new ViewCountries({collection: countries});
    $('.countries').append(listCountries.render().el)*/

    var controlStudentList = new ControllerStudentList(),
        controlCounty = new ControllerCountry(),
        controlColorBlock = new ControllerColorBlock();
            
};




