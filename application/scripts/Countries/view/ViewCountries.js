'use strict';
var ViewCountries = Backbone.View.extend({
    tagName: 'div',
    /*template: _.template(tplCaption()),*/

    render: function (continent) {
        var caption = tplCaption();
        this.$el.append(caption);
        var countries = this.collection.getCountries(continent);
        console.log(countries);
        if (countries != 0) {
        countries.each(function(country) {
            var countryView = new ViewCountryItem({
                model: country
            });
            this.$el.append(countryView.render().el);
        }, this);
        return this;
        }
    }
});

/*function ViewCountries (listCountries) {
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
}*/

