'use strict';
function ControllerCountry () {
    var countries = new Countries(),
        viewNav = new ViewNavigation(),
        viewCountries = new ViewCountries(countries);
    
    showNavigation();

    function showNavigation () {
        var navigationCountry = viewNav.showButton();
        implement('navigation', navigationCountry)
    }

    function showCountries (continent) {
        var countriesCont = viewCountries.createListCoun(continent);
    	implement('countriesList', countriesCont)
    }

    function implement (name, view) {
        var coord,
            adress,
            location;

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