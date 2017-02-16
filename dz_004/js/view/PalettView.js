function PalettView (colorPanel) {
	var palette = colorPanel['colorPalette'],
	    buttons = '',
        colorCell,
        item;

    for (var key in palette) {
    	item = palette[key];
        colorCell = new ButtonView(item.color, item);

        colorCell.showButton();
        colorCell.showCount();
    }
}

