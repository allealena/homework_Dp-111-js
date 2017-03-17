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

    function _createContainer (container) {
    	this.container = document.createElement(container);
        return this.container;
    }

    function _createInnerContaier (student, tpl) {
    	var studentJSON,
    	    innerContaier;
    	studentJSON = student.toJSON();
    	innerContaier = renderTpl(tpl, studentJSON);
    	this.container.innerHTML = innerContaier;
    	return this.container;
    }

    function _addEvent (btnSecector, action) {
    	var btn = this.container.querySelector(btnSecector);
		    btn.addEventListener('click', action, false);
    }

    function _removeEvent (btnSecector, action) {
    	var btn = this.container.querySelector(btnSecector);
		    btn.removeEventListener('click', action, false);
    }
    CView.prototype.createContainer =_createContainer;
    CView.prototype.createInnerContaier = _createInnerContaier;
    CView.prototype.addEvent = _addEvent;
    CView.prototype.removeEvent = _removeEvent;
    
	return CView;
})();