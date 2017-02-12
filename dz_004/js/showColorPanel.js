function showColorPanel (colorPanel, container) {
	var countContainer = document.querySelector('.counters'),
	    mainColor = document.querySelector('div.mainColor'),
	    palette = colorPanel['colorPalette'],
	    panel = '',
	    colorsBtn,
	    currentColor,
        currentClass,
        currentCl,
	    pickClassColor;

    createPalett();
    addEventBtn(); 
    showCounters(palette, countContainer); 
	
	function createPalett () {
		palette.forEach(function(item) {
			panel += '<div' + ' class="button button_' + 
			    item.color + ' ' + item.color +'"></div>';
		})
		container.innerHTML = panel;
	}

	function addEventBtn () {
        colorsBtn = document.querySelectorAll('div.button');
        
        [].forEach.call(colorsBtn, function(item) {
            item.addEventListener('click', pickColor, false);
        })
    }

    function pickColor () {
        currentClass = this.classList;
        [].forEach.call(currentClass, function (item) {
            currentCl = item;

            palette.forEach(function (item) {
                if (currentCl == item.color) {
                    item.countClick();
                    colorPanel.showCount();
                }
            })
        })

        if(pickClassColor) {
            mainColor.classList.remove(pickClassColor);
        }
        pickClassColor = this.classList[1];
        mainColor.classList.add(pickClassColor);
    }
}  

function showCounters (colorCollection, container) {
	var counter = '';

	colorCollection.forEach(function(item) {
        counter += '<span class="counter counter_' + item.color + '">' +'0'+ '</span>';
		container.innerHTML = counter;
	})
}


