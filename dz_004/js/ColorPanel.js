function ColorPanel (colorCollection) {
	var colorPalette = [],
	    cellPicker,
	    color;

	colorCollection.forEach(function(item) {
	    cellPicker = new ElemCellPicker();	
		cellPicker.color = item; 
		colorPalette.push(cellPicker);
	})
	this.colorPalette = colorPalette;

	this.showCount = function () {
		var count,
		    classColor = '',
		    countContainer;

		this.colorPalette.forEach(function (item) {
			count = item.currentCount;
			classColor += '.counter_' +item.color;
			countContainer = document.querySelector(classColor);
			countContainer.innerHTML = count;
			classColor = '';
		})
	}
} 
