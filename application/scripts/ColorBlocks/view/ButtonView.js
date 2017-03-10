function ButtonView (color, colorItem) {	    
    this.createButtonView = function () {
        var colorCell = renderTplColor(tplButton(), color),
            containerButton = document.createElement('div');        
        containerButton.innerHTML = colorCell;
        containerButton.addEventListener('click', pickColor, false);
        return containerButton;
    }; 
    
    function pickColor() {
        var mainColor;
        colorItem.countClick();
        mainColor = new MainColorView(color);
    }
}