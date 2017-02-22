function PalettView (colorPanel) {
	var palette = colorPanel['colorPalette'],
        colorCell,
        item,
        colorCounter;

    for (var key in palette) {
    	item = palette[key];
        colorCell = new ButtonView(item.color, item);
        colorCell.showButton();

        colorCounter = new CounterView(item.color, item);
        colorCounter.showCount();
    }
}

