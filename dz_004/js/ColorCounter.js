function ColorCounter () {
	this.color = '';
	this.currentCount = 0;
	this.countClick = function () {
        return ++this.currentCount;  
    }
}
