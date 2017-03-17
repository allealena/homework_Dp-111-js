'use strict';
function extend (child, parent) {
	function Surogat () {
		this.constractor = child;
	}
	Surogat.prototype = parent.prototype;
	child.prototype = new Surogat();
}

var View = (function () {
    function CView () {};

	CView.prototype = {
		createContainer: function (container) {
            this.container = document.createElement(container);
            return this.container;
		},
		createInnerContaier: function (student, tpl) {
    	    var studentJSON,
    	        innerContaier;
    	    studentJSON = student.toJSON();
    	    innerContaier = renderTpl(tpl, studentJSON);
    	    this.container.innerHTML = innerContaier;
    	    return this.container;
        },
        addEvent: function (btnSecector, action) {
		    var btn = this.container.querySelector(btnSecector);
		    btn.addEventListener('click', action, false);
	    },
	    removeEvent: function (btnSecector, action) {
		    var btn = this.container.querySelector(btnSecector);
		    btn.removeEventListener('click', action, false);
	    }
	};
	return CView;
})();