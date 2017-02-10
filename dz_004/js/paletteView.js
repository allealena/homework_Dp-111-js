function showColorPanel (colorPanel, container) {
	var countContainer = document.querySelector('.counters'),
	    mainColor = document.querySelector('div.mainColor'),
	    palette = colorPanel['colorPalette'],
	    panel = '',
	    colorsBtn,
	    currentColor,
	    pickClassColor;
	
	function createPalett () {
		palette.forEach(function(item) {
			panel += '<div' +' data-color="' + 
			    item.color + '" class="button button_' + 
			    item.color + '"></div>';
		})

		container.innerHTML = panel;
	}

	createPalett();

	function clickBtn () {
        colorsBtn = document.querySelectorAll('div.button');
        
        [].forEach.call(colorsBtn, function(item) {
            item.addEventListener('click', pickColor, false);
        })
    }

    clickBtn();  

    function pickColor (event) {
        currentColor = this.dataset.color;

        palette.forEach(function(item) {
            if (currentColor == item.color) {
                item.countClick();
                colorPanel.showCount();
            }
        })

        if(pickClassColor) {
            mainColor.classList.remove(pickClassColor);
        }
        target = event.target;
        pickClassColor = target.classList[1];
        mainColor.classList.add(pickClassColor);
    }
    showCounters(palette, countContainer); 
}  

function showCounters (colorCollection, container) {
	var counter = '';

	colorCollection.forEach(function(item) {
        counter += '<span class="counter counter_' + item.color + '">' +'0'+ '</span>';
		container.innerHTML = counter;
	})
}


