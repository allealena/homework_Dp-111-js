'use strict';
function ColorCounter () {
	this.color = '';
	this.currentCount = 0;
	this.countClick = function () {
        this.currentCount++; 
        this.triggerEvent('clickcolor');
        return this.currentCount;
    }
}

ColorCounter.prototype = new Observer();
   
