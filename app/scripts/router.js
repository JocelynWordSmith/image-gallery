'use strict';

var appRouter = Backbone.Router.extend({

	routes: {
		'detail/:id' : 'renderDetail',
		'new' : 'renderNew',
	},

	initialize: function() {
		console.log('app router has initialized');
	},

	renderDetail: function (id) {
		var detailInstance = new DetailView({model: id});
		$('detail-container').html(detailInstance);
	},

	// renderNew: function () {
	
	// },
})

var router = new appRouter();

Backbone.history.start();