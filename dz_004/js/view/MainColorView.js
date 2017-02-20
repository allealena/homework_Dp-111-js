 function MainColorView (colorClass) { 
 	var mainColor = document.querySelector('.mainColor'),
 	    colorDel,
 	    colorClass;

        colorDel = mainColor.classList[1];

        if(colorDel) {
            mainColor.classList.remove(colorDel);
        }
        
        mainColor.classList.add(colorClass); 
        colorClass = '';
    }