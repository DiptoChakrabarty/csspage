Barba.Pjax.start()


var FadeTransition = Barba.BaseTransition.extend({
    start: function() {



    /**
* This function is automatically called as soon the Transition starts
* this.newContainerLoading is a Promise for the loading of the new container
* (Barba.js also comes with an handy Promise polyfill!)
*/
    // As soon the loading is finished and the old page is faded out, let's fade the new page


    Promise
    .all([this.newContainerLoading, this.fadeOut()])
    .then(this.fadeIn.bind(this));
    },
    fadeOut: function() {
        
    },


    fadeIn: function() {
        this.newContainer.classList.add("slide-in");


        var that = this;
        this.newContainer.addEventListener("animationend", function() {
            that.newContainer.classList.remove('slide-in');
            that.done();
        });
    }

});



/**
* Next step, you have to tell Barba to use the new Transition
*/


Barba.Pjax.getTransition = function() {
  
  
    /**
* Here you can use your own logic!
* For example you can use different Transition based on the current page or link...
*/


    return FadeTransition;
};