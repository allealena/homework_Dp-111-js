function ColorCounter () {
	this.color = '';
	this.currentCount = 0;
	this.countClick = function () {
        this.currentCount++; 
        this.triggerEvent('clickcolor');
        return this.currentCount;
    }

    listeners = {
    	clickcolor: []
    };
}

ColorCounter.prototype = new Observer();
   
