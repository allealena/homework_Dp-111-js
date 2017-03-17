'use strict';
function ViewCountries (listCountries) {
    var container = $('<div></div>');
    
	this.createListCont = function (continent) {
        var caption,
            countries,
            allCountries;
        caption = tplCaption();
        caption = caption.replace('caption:', continent);
        container.html(caption);

        countries = listCountries.getCountries(continent);
        countries.forEach(function (item) {
            createList(item);
        })
        return container;
    };

    function createList (item) {
        var country = new ViewCountryItem(item, listCountries); 
        container.append(country);       
    }
}

