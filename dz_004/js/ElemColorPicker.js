function ElemCellPicker (widthEl, heightEl) {
	this.widthEl = widthEl;
	this.heightEl = heightEl;
	this.color = '';
	this.currentCount = 0;
	this.countClick = function () {
        return this.currentCount++;  
    }
}
