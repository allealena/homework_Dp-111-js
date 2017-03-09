'use strict';
function ViewCountryItem (item, listCountries) {
	var itemLi = document.createElement('li'),
	    itemList = renderTplCountry(tplListItem, item),
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
        var countryName = item.name;
        listCountries.removeItem(countryName);
        country = this.parentNode;
        country.parentNode.removeChild(country);
    }
    return itemLi;
}