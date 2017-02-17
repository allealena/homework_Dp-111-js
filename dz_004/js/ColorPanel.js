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
} 
