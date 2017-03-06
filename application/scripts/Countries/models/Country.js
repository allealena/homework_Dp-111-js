'use strict';
function Country (continentProp, nameProp, areaProp, populationProp) {
	var countryProp = {
            continent: continentProp,
            name: nameProp,
            area: areaProp,
            population: populationProp
	    },
        country;

    this.getJSON = function () {
    	country = {};
        for (var key in countryProp) {
        	country[key] = countryProp[key];
        }
        return country;
    }
}