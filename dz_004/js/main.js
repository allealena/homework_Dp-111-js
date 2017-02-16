'use strict';
window.addEventListener('load', startApp, false);
function startApp () {
    var colorPicker = document.querySelector('.colorPicker'),
        colors = ['red', 'blue', 'green'],
        palette,
        colorPallet;

    palette = new ColorPanel(colors);
    colorPallet = new PalettView(palette);
}

