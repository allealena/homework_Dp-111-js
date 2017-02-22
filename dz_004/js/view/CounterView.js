function CounterView (color, colorItem) {
    var containerCount = document.querySelector('.counters'),
        containerCounter,
        counter,
        curCount,
        count;
        
    this.showCount = function () {
    	counter = renderTpl(tplCounter(), color);
    	containerCounter = document.createElement('div');
    	containerCounter.innerHTML = counter;
        containerCount.appendChild(containerCounter);
    }

    function countButtonClick () {
        curCount = document.querySelector('span.counter_' + color);
        count = colorItem.countClick();
        curCount.innerHTML = count;
    }
}        
