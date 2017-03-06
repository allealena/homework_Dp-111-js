'use strict';
function Countries () {
	var countries = getCountriesCollection(),
	    continentCountries,
        countriesCol,
        continent,
        name,
        area,
        population,
        countryJSON,
        country,
        countriesCollection;

    this.getCountries = function (cont) {
    	continentCountries = [];
    	countries.forEach(function (item) {
    		if(item.continent === cont) {
    			continentCountries.push(item);
    		}
    	})
        return continentCountries;
    }

    this.getAll = function () {
    	return countries;
    	}

    this.removeItem = function (country) {
    	countries.forEach(function (item, i) {
    		if (item.name === country) {
        		countries.splice(i, 1);
        	};
    	})
    }
    function getCountriesCollection () {
        countriesCol = [];
        countriesCollection = collection();
        
        countriesCollection.forEach(function (item) {
            continent = item[0];
            name = item[1];
            area = item[2];
            population = item[3];
            country = new Country(continent, name, area, population);
            countryJSON = country.getJSON();
            countriesCol.push(countryJSON);
        })
    return countriesCol;
    }
}
