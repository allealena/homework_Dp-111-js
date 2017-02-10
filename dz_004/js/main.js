'use strict';
window.addEventListener('load', startApp, false);
function startApp () {
    var colorPicker = document.getElementById('colorPicker'),
        colors = ['red', 'blue', 'green'],
        palette;

    palette = new ColorPanel(colors);
    showColorPanel(palette, colorPicker); 
}

