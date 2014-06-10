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
		var modelPhoto = newPhoto.get(id);
		console.log(newPhoto.length, ' is the length of the collection')
		console.log('model is: ', modelPhoto);

		var detailInstance = new DetailView({model: modelPhoto});
		
		// $('.detail-container').html(detailInstance);
	},

	// renderNew: function () {
	
	// },
})

// var router = new appRouter();

// Backbone.history.start();