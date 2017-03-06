'use strict';
function ControllerCountry () {
    var countries = new Countries(),
        viewNav = new ViewNavigation(),
        viewCountries = new ViewCountries(countries),
        navigationCountry,
        countriesCont,
        coord,
        adress,
        location;
    
    showNavigation();

    function showNavigation () {
        navigationCountry = viewNav.showButton();
        implement('navigation', navigationCountry)
    }

    function showCountries (continent) {
    	countriesCont = viewCountries.createListCoun(continent);
    	implement('countriesList', countriesCont)
    }

    function implement (name, view) {
        coord = {
            navigation: '.buttons',
            countriesList: '.countries'
        }
        adress = coord[name];
        location = document.querySelector(adress);
        location.appendChild(view);
    }

    mediator.sub('getContinent', showCountries);
}