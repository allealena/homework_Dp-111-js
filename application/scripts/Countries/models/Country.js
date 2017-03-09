'use strict';
function Country (continentProp, nameProp, areaProp, populationProp) {
	var countryProp = {
            continent: continentProp,
            name: nameProp,
            area: areaProp,
            population: populationProp
	    };

    this.getJSON = function () {
    	var country = {};
        for (var key in countryProp) {
        	country[key] = countryProp[key];
        }
        return country;
    };
}