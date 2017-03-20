'use strict';
var ViewNavigation = Backbone.View.extend({
    tagName: 'div',
    navigation: tplNav(),

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(this.navigation);
        return this;
    },

    events: {
        'click button' : 'showCountries'
    },

    showCountries: function () {
        var continent = event.target.name;
        this.trigger('getContinent', continent);
    }
    
});
/*function ViewNavigation () {
    
    this.showButton = function () {
    	var container = document.createElement('div'),
    	    navigation = tplNav(),
    	    buttons;

        container.innerHTML = navigation;
	    buttons = container.querySelectorAll('button');

	    [].forEach.call(buttons, function (item) {
		    item.addEventListener('click', showCountries, false);
	    })
	    return container;
    };
    
    function showCountries () {
    	var continent = this.name;
		mediator.pub('getContinent', continent);
	}
}*/

