function showColorPanel (colorPanel, container) {
	var panel = '',
	    colorsBtn,
	    palette,
	    paletteEl;
	
	palette = colorPanel['colorPalette'];
	palette.forEach(function(item) {
		panel += '<div' +' data-color="' + item.color + '" class="button button_' + item.color + '"></div>';

	})
	container.innerHTML = panel;
	colorsBtn = document.getElementsByClassName('button');
    paletteEl = palette[0];
	
	[].forEach.call(colorsBtn, (function(item) {
		item.style.width = paletteEl.widthEl;
		item.style.height = paletteEl.heightEl;
	}))
}  

function showCounters (colorCollection, container) {
	var counter = '';

	colorCollection.forEach(function(item) {
        counter += '<span class="counter counter_' + item + '">' +'0'+ '</span>';
		container.innerHTML = counter;
	})
}