function CounterView (color) {
    var containerCount = document.querySelector('.counters'),
        containerCounter,
        counter;
        
    this.showCount = function () {
    	counter = renderTpl(tplCounter(), color);
    	containerCounter = document.createElement('div');
    	containerCounter.innerHTML = counter;
        containerCount.appendChild(containerCounter);
    }
}        
