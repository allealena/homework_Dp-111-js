function ColorPanel (colorCollection) {
	var palette = [],
	    colorCell,
	    color;

	colorCollection.forEach(function (item) {
	    colorCell = new ColorCounter();	
		colorCell.color = item; 
		palette.push(colorCell);
	})

	this.colorPalette = palette;
} 
