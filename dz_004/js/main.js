'use strict';
window.addEventListener('load', startApp, false);
function startApp () {
    var colorPicker = document.getElementById('colorPicker'),
        mainColor = document.querySelector('div.mainColor'),
        countContainer = document.querySelector('.counters'),
        colors = ['red', 'blue', 'green'],
        pickClassColor,
        buttons,
        target,
        palette,
        currentColor,
        colorPalette;

    palette = new ColorPanel('200px', '50px', colors);
    console.log(palette);
    showColorPanel(palette, colorPicker);
    colorPalette = palette['colorPalette'];

    function clickBtn () {
        buttons = document.querySelectorAll('div.button');
        [].forEach.call(buttons, function(item) {
        item.addEventListener('click', pickColor, false);
    })
    }   

    function pickColor (event) {
        currentColor = this.dataset.color;

        colorPalette.forEach(function(item) {
            if (currentColor == item.color) {
                item.countClick();
            }
        })
        console.log(colorPalette);

        if(pickClassColor) {
            mainColor.classList.remove(pickClassColor);
        }
        target = event.target;
        pickClassColor = target.classList[1];
        mainColor.classList.add(pickClassColor);
    }
    
    showCounters(colorPalette, countContainer);  
    clickBtn();     
}

