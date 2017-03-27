'use strict';
var Countries = Backbone.Collection.extend({
    model: Country,

    getCountries: function (cont) {
        var continentCountries = [],
            countryJSON,
            myContinent;
        
        this.forEach(function (item) {
            myContinent = item.isOwnContinent(cont);
            countryJSON = item.toJSON();
            
            if (cont === 'All' || myContinent) {
                continentCountries.push(countryJSON);
            } 
        })
        return continentCountries;
    },

    removeItem: function (country) {
        var countryJSON,
            these = this;
        this.forEach(function (item) {
            console.log(item);
            countryJSON = item.toJSON();
            
            if (countryJSON.name === country.name) {
                these.remove(item);
                /*break;*/
                /*these.splice(i, 1);*/
            };
        })
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
