function MainColorView (color) { 
 	var mainColor = document.querySelector('.mainColor'),
 	    colorDel,
 	    colorClass='';

 	    colorClass += 'mainColor_' + color;
        colorDel = mainColor.classList[1];

        if(colorDel) {
            mainColor.classList.remove(colorDel);
        }
        
        mainColor.classList.add(colorClass);  	    
}