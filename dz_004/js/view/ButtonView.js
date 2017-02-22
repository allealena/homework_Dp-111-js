function ButtonView (color, colorItem) {
    var containerColors = document.querySelector('.containerColors'),
        colorCell,
        containerButton,
        mainColor;
	    
    this.showButton = function () {
        colorCell = renderTpl(tplButton(), color);
        containerButton = document.createElement('div');
        containerButton.innerHTML = colorCell;
        containerColors.appendChild(containerButton);

        containerButton.addEventListener('click', pickColor, false);   
    } 

    function pickColor() {
        colorItem.countClick();
        mainColor = new MainColorView(color);
    }
}