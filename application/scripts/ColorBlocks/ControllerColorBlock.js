function ControllerColorBlock () {
	var colors = ['red', 'blue', 'green'],
	    containerCount = $('.counters'),
	    containerColors = $('.containerColors'),
        colorPalette;

    colorPalette = new ColorPanel(colors);
    showPalette(colorPalette);

    function showPalette (palette) {
	    var colorCell,
            colorCounter,
            containerButton,
            containerCounter;
    
        palette.forEach(function (item) {
            colorCell = new ButtonView(item.color, item);
            containerButton = colorCell.createButtonView();
            containerColors.append(containerButton);

            colorCounter = new CounterView(item.color, item);
            containerCounter = colorCounter.createCountView();
            containerCount.append(containerCounter);
        })
    }
}