var Countries = (function () {
	function ConstructorCountries () {
	    this.countries = getCountriesCollection();
	}
	
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

	ConstructorCountries.prototype = {
        getCountries: function (continent) {
        	var continentCountries = [],
                countryJSON,
                myContinent;
        
    	    this.countries.forEach(function (item) {
                countryJSON = item.getJSON();
                myContinent = item.isOwnContinent(continent);
            
                if (continent === 'All' || myContinent) {
                    continentCountries.push(countryJSON);
                } 
    	    })
            return continentCountries;
        },
        removeItem: function (country) {
        	var countriesCollection = this.countries,
        	    countryJSON;
        	
    	    countriesCollection.forEach(function (item, i) {
                countryJSON = item.getJSON();
    		    if (countryJSON.name === country) {
        		    countriesCollection.splice(i, 1);
        	    };
    	    })
        }
    }
	return ConstructorCountries;
})();