'use strict';
function ViewNavigation () {
    
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
}

