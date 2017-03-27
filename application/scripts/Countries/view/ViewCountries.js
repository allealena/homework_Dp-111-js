'use strict';
var ViewCountries = Backbone.View.extend({
    tagName: 'div',

    render: function (continent) {
        this.$el.html('<h1>' + continent + '</h1>');
        var countries = this.collection.getCountries(continent);

        countries.forEach(function (country) {
            var countryView = new ViewCountryItem({model: country});
            this.$el.append(countryView.render().el);
        }, this);

        return this;
    }
});

