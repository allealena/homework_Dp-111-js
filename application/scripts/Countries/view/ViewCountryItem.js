'use strict';
var ViewCountryItem = Backbone.View.extend({
    tagName: 'li',
    template: _.template(tplListItem()),

    render: function () {
        this.$el.html( this.template(this.model.toJSON() ) );
        return this;
    }
});
/*function ViewCountryItem (countryItem) {
	var itemLi = document.createElement('li'),
	    itemList = renderTplCountry(tplListItem, countryItem),
        country;

    itemLi.innerHTML = itemList;
    addEvents();

    function addEvents () {
        var buttonLike,
            buttonDislike,
            buttonKill;

        buttonLike = itemLi.querySelector('.icon.like');
        buttonDislike = itemLi.querySelector('.icon.dislike');
        buttonKill = itemLi.querySelector('.icon.kill');

        buttonLike.addEventListener('click', likeIt);
        buttonDislike.addEventListener('click', dislikeIt);
        buttonKill.addEventListener('click', removeIt);
    }
    function likeIt () {
        country = this.parentNode;
        country.classList.toggle('likeIt');
    }
    function dislikeIt () {
        country = this.parentNode;
        country.parentNode.removeChild(country);
    }
    function removeIt () {
        var countryName = countryItem.name;
        country = this.parentNode;
        country.parentNode.removeChild(country);

        mediator.pub('deleteCountry', countryItem);
    }
    return itemLi;
}*/
