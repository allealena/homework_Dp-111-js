'use strict';
var ViewCountryItem = Backbone.View.extend({
    tagName: 'li',
    template: _.template(tplListItem()),

    events: {
        'click span.like': 'likeIt',
        'click span.dislike': 'dislikeIt',
        'click span.kill': 'removeIt'
    },

    render: function () {
        this.$el.html(this.template(this.model) );

        return this;
    },
    
    likeIt: function () {
        this.el.classList.toggle('likeIt');
    },

    dislikeIt: function () {
        var country = this.el;
        country.parentNode.removeChild(country);
    },

    removeIt: function () {
        this.dislikeIt();
        mediator.pub('deleteCountry', this.model);
    }

});
