'use strict';
function ColorPanel (colorCollection) {
	var palette = [],
	    colorCell;

	colorCollection.forEach(function (item) {
	    colorCell = new ColorCounter();	
		colorCell.color = item; 
		palette.push(colorCell);
	})
	return palette;
} 
