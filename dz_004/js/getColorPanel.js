function ColorPanel (widthButton, heightButton, colorCollection) {
	var colorPalette = [],
	    cellPicker,
	    color;

	colorCollection.forEach(function(item) {
	    cellPicker = new ElemCellPicker(widthButton, heightButton);	
		cellPicker.color = item; 
		colorPalette.push(cellPicker);
	})
	this.colorPalette = colorPalette;	
} 

