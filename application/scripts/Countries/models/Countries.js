'use strict';
function Countries () {
	var countries = getCountriesCollection(),
        continent;

    this.getCountries = function (cont) {
    	var continentCountries = [],
            countryJSON;
        
    	countries.forEach(function (item) {
            countryJSON = item.getJSON();
            if (cont === 'All' || countryJSON.continent === cont) {
                continentCountries.push(countryJSON);
            } 
    	})
        return continentCountries;
    };

    this.removeItem = function (country) {
        var countryJSON;
    	countries.forEach(function (item, i) {
            countryJSON = item.getJSON();
    		if (countryJSON.name === country) {
        		countries.splice(i, 1);
        	};
    	})
    };

    function getCountriesCollection () {
        var countriesCol = [],
            countriesCollection,
            country;
        
        countriesCollection = collection();

        countriesCollection.forEach(function (item) {
            country = new Country(...item);
            countriesCol.push(country);
        })
        return countriesCol;
    }
    this.countries = countries;
}
