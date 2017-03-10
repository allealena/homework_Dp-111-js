function ControllerColorBlock () {
	var colors = ['red', 'blue', 'green'],
	    containerCount = document.querySelector('.counters'),
	    containerColors = document.querySelector('.containerColors'),
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
            containerColors.appendChild(containerButton);

            colorCounter = new CounterView(item.color, item);
            containerCounter = colorCounter.createCountView();
            containerCount.appendChild(containerCounter);
        })
    }
}