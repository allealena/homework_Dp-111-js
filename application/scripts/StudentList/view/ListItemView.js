'use strict';
var ListItemView = Backbone.View.extend({
	tagName: 'tr',
	template: _.template(tmplRowTable()),

	initialize: function () {
		this.render();
		this.listenTo(this.model, 'change', this.render);
	},

	render: function () {
		this.$el.html( this.template(this.model.toJSON() ) );
		return this;
	},

	events: {
		'click button.more' : 'showInfoStudent',
		'click button.edit' : 'showEditForm',
		'change' : 'updateInfo'
	},

	showInfoStudent: function () {
		var fullInfo = new FullInfoView({
			model: this.model
		});

	    $('#card').append(fullInfo.render());
	},

	showEditForm: function () {
		var editForm = new EditFormView({
			model: this.model
		});
		
		$('#editForm').append(editForm.render());
	}
});