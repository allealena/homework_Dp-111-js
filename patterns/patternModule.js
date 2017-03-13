var Ponny = (function(){    
    function ConstructorPonny (name, speed) {
        this.name = name;
        this.speed = speed;
        this.feed = true;
    }
    
    ConstructorPonny.prototype = {
    	meet: function () {
    		    console.log('Hello, my name is ' + this.name);
    		    if (this.feed) {
                console.log('I wonna run!');
                }
                console.log('Could you feed me? I\'m hungry.');
    	    },
    	run: function (distance) {
    		    if (!this.feed) {
                    console.log('I cannot run! I\'m starving! Please, feed me!');
    		    } else if (!distance) {
    			    console.log('so, where are we going?');
    		    } else {
                    var time = distance / this.speed,
                        complaint = this.getHungry();
                    console.log('ponny ' + this.name + ' will come running in ' + time + ' hours'); 
                    this.feed = false;
                    console.log(complaint + ' I\'ve been running for ' + time + ' hours');
                }
            },
        getHungry: function () {
        	var speaking = 'I wonna eat';
    	    return speaking;
            },
        eat: function () {
                this.feed = true;
                console.log('I\'m ready to run');  
            }
    } 
    return ConstructorPonny;
})();

