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

ColorCounter.prototype.addListener = function (evt, callback) {
    if (!listeners[evt]) {
        listeners[evt] = [];
    }
    listeners[evt].push(callback);
}

ColorCounter.prototype.triggerEvent = function (evt) {
    if (listeners[evt]) {
        listeners[evt].forEach(function (callback) {
            callback();
        })
    }
}

   
