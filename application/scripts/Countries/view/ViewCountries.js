'use strict';
function ViewCountries (listCountries) {
    var container = document.createElement('div');
    
	this.createListCoun = function (continent) {
        var caption,
            countries,
            allCountries;
        caption = tplCaption();
        caption = caption.replace('caption:', continent);
        container.innerHTML = caption;

        countries = listCountries.getCountries(continent);
        countries.forEach(function (item) {
            createList(item);
        })
        return container;
    };

    function createList (item) {
        var country = new ViewCountryItem(item, listCountries);          
        container.appendChild(country);
    }
}

