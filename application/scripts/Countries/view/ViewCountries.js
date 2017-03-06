'use strict';
function ViewCountries (listCountries) {
    var container = document.createElement('div'),
        caption,
        countries,
        allCountries,
        item,        
        country;
    
	this.createListCoun = function (continent) {
        caption = tplCaption();
        caption = caption.replace('caption:', continent);
        container.innerHTML = caption;

        if (continent === 'All') {
            allCountries = listCountries.getAll(); 
            allCountries.forEach(function (item) {
                createList(item);
            })
        } else {
            countries = listCountries.getCountries(continent);
            countries.forEach(function (item) {
                createList(item);
            })
        }
        return container;
    }

    function createList (item) {
        country = new ViewCountryItem(item, listCountries);          
        container.appendChild(country);
    }
}

