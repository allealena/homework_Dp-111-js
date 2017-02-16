function ButtonView (color, colorItem) {
    var containerColorPicker = document.querySelector('.colorPicker'),
        containerCount = document.querySelector('.counters'),
        mainColor = document.querySelector('.mainColor'),
        colorClass = '',
        curCount,
        colorCell,
        containerButton,
        containerCounter,
        colorDel,
        counter,
        count;
	    
    this.showButton = function () {
        colorCell = renderTpl(tplButton(), color);
        containerButton = document.createElement('div');
        containerButton.innerHTML = colorCell;
        containerColorPicker.appendChild(containerButton);

        containerButton.addEventListener('click', pickColor, false);
        containerButton.addEventListener('click', countButtonClick, false);
    }

    this.showCount = function () {
    	counter = renderTpl(tplCounter(), color);
    	containerCounter = document.createElement('div');
    	containerCounter.innerHTML = counter;
        containerCount.appendChild(containerCounter);
    }

    function pickColor () { 
        colorDel = mainColor.classList[1];

        if(colorDel) {
            mainColor.classList.remove(colorDel);
        }

        colorClass = this.firstChild.classList[1];
        mainColor.classList.add(colorClass); 
        colorClass = '';
    }

    function countButtonClick () {
        curCount = document.querySelector('span.counter_' + color);
        count = colorItem.countClick();
        curCount.innerHTML = count;
    }
}