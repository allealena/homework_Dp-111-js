function PalettView (palette) {
	var colorCell,
        colorCounter;
    
    palette.forEach(function (item) {
        colorCell = new ButtonView(item.color, item);
        colorCell.showButton();

        colorCounter = new CounterView(item.color, item);
        colorCounter.showCount();
    })
}

