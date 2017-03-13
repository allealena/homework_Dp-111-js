function Cat () {
	var empty = false;

	listeners = {};

	this.addListener = function (evt, callback) {
		if (!listeners.hasOwnProperty(evt)) {
			listeners[evt] = [];
		}
		listeners[evt].push(callback);
	}

	/*this.removeListener = function (evt, callback) {
		if (listeners.hasOwnProperty(evt)) {
			listeners[evt].forEach(function (item, i) {
                if (item === callback) {
                	listeners[evt].splice(i, 1);
                }
			})
		}
	}*/
	this.triggerEvent = function (evt) {
		if (listeners.hasOwnProperty(evt)) {
			listeners[evt].forEach(function (callback) {
				callback();
			})
		}
	}

	this.run = function () {
		console.log('cat is running');
		empty = true;
		this.triggerEvent('empty');
	}

	this.feed = function () {
		console.log('cat is feeded');
		empty = false;
		this.triggerEvent('full');
	}
}

var murchik = new Cat();
	murchik.addListener('empty', function () {
		console.log('cat is starving');
	})
	murchik.addListener('full', function () {
		console.log('cat is sleeping with happy smile');
	})

	murchik.run();
    murchik.feed();