'use strict';
var Countries = Backbone.Collection.extend({
    model: Country,

    events: {
        'getContinent': 'getCountries'
    },

    getCountries: function (cont) {
        var continentCountries = [],
            countryJSON,
            myContinent;
        
        this.forEach(function (item) {
            countryJSON = item.toJSON();
            myContinent = item.isOwnContinent(cont);
            
            if (cont === 'All' || myContinent) {
                continentCountries.push(countryJSON);
            } 
        })
        return continentCountries;
    }
});
/*function Countries () {
	var countries = getCountriesCollection(),
        continent;

    this.getCountries = function (cont) {
    	var continentCountries = [],
            countryJSON,
            myContinent;
        
    	countries.forEach(function (item) {
            countryJSON = item.getJSON();
            myContinent = item.isOwnContinent(cont);
            
            if (cont === 'All' || myContinent) {
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
}*/
