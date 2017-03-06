'use strict';
function ViewNavigation () {
	var navigation = tplNav(),
        container = document.createElement('div'),
        buttons,
        continent;
    
    this.showButton = function () {
        container.innerHTML = navigation;
	    buttons = container.querySelectorAll('button');

	    [].forEach.call(buttons, function (item) {
		    item.addEventListener('click', showCountries, false);
	    })
	    return container;
    }
    
    function showCountries () {
		continent = this.name;
		mediator.pub('getContinent', continent);
	}
}

