'use strict';
var TableView = Backbone.View.extend({
    tagName: 'table',
    className: 'studentsList',

    render: function () {
    	var header = tmplTableHeader();
    	this.$el.append(header);
    	this.collection.forEach(function(student) {
    		var studentView = new ListItemView({
	            model: student
            });
            this.$el.append(studentView.render().el);
    	}, this);
    	return this;
    }
});