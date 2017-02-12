'use strict';
window.addEventListener('load', startApp, false);
function startApp () {
    var colorPicker = document.querySelector('.colorPicker'),
        colors = ['red', 'blue', 'green'],
        palette;

    palette = new ColorPanel(colors);
    showColorPanel(palette, colorPicker); 
}

