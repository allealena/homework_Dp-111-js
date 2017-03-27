'use strict';
var MainColorView = Backbone.View.extend({
	initialize: function(color) {
		var mainColor = $('.mainColor'),
 	    colorDel,
 	    colorClass='';



 	    colorClass += 'mainColor_' + color;
        /*colorDel = mainColor.classList[1];*/

       
/*        mainColor.removeClass(colorClass);
*/        

        mainColor.css('background-color', color);  
        console.log(mainColor);  
       /* mainColor.addClass(colorClass); */
	}
});
/*function MainColorView (color) { 
 	var mainColor = document.querySelector('.mainColor'),
 	    colorDel,
 	    colorClass='';

 	    colorClass += 'mainColor_' + color;
        colorDel = mainColor.classList[1];

        if(colorDel) {
            mainColor.classList.remove(colorDel);
        }       
        mainColor.classList.add(colorClass);  	    
}*/