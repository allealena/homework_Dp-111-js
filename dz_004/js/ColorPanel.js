function ColorPanel (colorCollection) {
	var palette = [],
	    cellPicker,
	    color;

	colorCollection.forEach(function(item) {
	    cellPicker = new ElemCellPicker();	
		cellPicker.color = item; 
		palette.push(cellPicker);
	})
	this.colorPalette = palette;

	/*this.showCount = function () {
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
	}*/
} 
