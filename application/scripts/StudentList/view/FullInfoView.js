'use strict';
var FullInfoView = Backbone.View.extend({ 
    tagName: 'div',
    template: _.template(tmplFullForm()),

	render: function () {
		var fullInfo = this.$el.html(this.template(this.model.toJSON() ));
		return fullInfo;
	},

	events: {
		'click button.closeFullForm' : 'removeInfoStudent'
	},

	removeInfoStudent: function () {
		this.remove();
	}
})
