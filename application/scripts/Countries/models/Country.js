'use strict';
var Country = Backbone.Model.extend({
    defaults: {
        continent: '',
        name: '',
        area: '',
        population: ''
    },

    isOwnContinent: function (cont) {
        var myContinent = this.toJSON().continent;
        if (cont == myContinent) {
            return true;
        }
    }
});


/*function Country (continentProp, nameProp, areaProp, populationProp) {
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
    this.isOwnContinent = function (cont) {
        if (cont === countryProp.continent) {
            return true;
        }
    }
}*/