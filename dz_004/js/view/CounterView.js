function CounterView (color, colorItem) {
    var containerCount = document.querySelector('.counters'),
        containerCounter,
        counter,
        curCount,
        count;
        
    this.showCount = function () {
    	counter = renderTplColor(tplCounter(), color);
    	containerCounter = document.createElement('div');
    	containerCounter.innerHTML = counter;
        containerCount.appendChild(containerCounter);
    }
    
   colorItem.addListener('clickcolor', countButtonClick); 
 
    function countButtonClick () {
        curCount = document.querySelector('span.counter_' + color);
        count = colorItem.currentCount;
        curCount.innerHTML = count;
    }
}        
