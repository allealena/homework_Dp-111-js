function CounterView (color, colorItem) {       
    this.createCountView = function () {
        var containerCounter = document.createElement('div'),
            counter = renderTplColor(tplCounter(), color);
    	containerCounter.innerHTML = counter;
        return containerCounter;
    };
    
   colorItem.addListener('clickcolor', countButtonClick); 
 
    function countButtonClick () {
        var curCount,
            count;
        curCount = document.querySelector('span.counter_' + color);
        count = colorItem.currentCount;
        curCount.innerHTML = count;
    }
}        
