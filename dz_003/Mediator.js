function Mediator () {
	this.listeners = {
        getStudentData: [],
        editStudentData: []
	};

	this.on = function (evt, callback) {
        if (!this.listeners[evt]) {
            this.listeners[evt] = [];
        }
        this.listeners[evt].push(callback);
    }

    this.triggerEvent = function (evt, data) {
        if (this.listeners[evt]) {
            this.listeners[evt].forEach(function (callback) {
                callback(data);
            })
        }
    }
}