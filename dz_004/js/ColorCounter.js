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

    this.addListener = function (evt, callback) {
    	if (!listeners.hasOwnProperty(evt)) {
    		listeners[evt] = [];
    	}
    	listeners[evt].push(callback);
    }

    this.triggerEvent = function (evt) {
    	if (listeners.hasOwnProperty(evt)) {
	    	listeners[evt].forEach(function (callback) {
	    		callback();
	    	})
    	}
    }
}
