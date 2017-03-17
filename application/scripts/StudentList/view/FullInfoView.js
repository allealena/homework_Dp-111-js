'use strict';
function FullInfoView () {
	var container = this.createContainer('div'),
	    tpl = tmplFullForm(),
	    these = this;

	this.createInner = function (student) {
		var innerContainer;
		
		if (container) {
    	    container.innerHTML = '';
		}

		innerContainer = this.createInnerContaier(student, tpl);
        this.addEvent('button.closeFullForm', removeInfoStudent);

        function removeInfoStudent () {
        	these.removeEvent('button.closeFullForm', removeInfoStudent);
            container.innerHTML = '';
        }
        return innerContainer;
	}	
};

extend(FullInfoView, View);

