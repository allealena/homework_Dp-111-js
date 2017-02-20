function ButtonView (color, colorItem) {
    var containerColors = document.querySelector('.containerColors'),
        colorClass = '',
        curCount,
        colorCell,
        containerButton,
        count,
        mainColor;
	    
    this.showButton = function () {
        colorCell = renderTpl(tplButton(), color);
        containerButton = document.createElement('div');
        containerButton.innerHTML = colorCell;
        containerColors.appendChild(containerButton);

        containerButton.addEventListener('click', pickColor, false);        
        containerButton.addEventListener('click', countButtonClick, false);
    } 

    function pickColor() {
        colorClass = this.firstChild.classList[1];
        mainColor = new MainColorView(colorClass);
    }

     function countButtonClick () {
        curCount = document.querySelector('span.counter_' + color);
        count = colorItem.countClick();
        curCount.innerHTML = count;
    }
}