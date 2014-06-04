//image model
'use strict';
//makes a model/constructor called photo 
var Photo = Backbone.Model.extend({
	//tells the model that the server uses _id nomenclature
	idAttribute: '_id',

	defaults: {
		caption: ' ',
	},
});
// creates a collection/constructor that links to Photo
var PhotoCollection = Backbone.Collection.extend({
	model: Photo,
	url: 'http://tiny-pizza-server.herokuapp.com/collections/photos',
});
//image view for detail pane
var DetailView = Backbone.View.extend({

	className: 'detail-bound',

	template: _.template($('.detail-template').text()),

	initialize: function() {
		$('.detail-container').html(this.el);
		this.render();
	},

	render: function() {
		var renderedTemplate = this.template(this.model.attributes);
		this.$el.html(renderedTemplate);
	},

});

//image view for thumbnail collection
var ThumbnailView = Backbone.View.extend({

	className: 'thumb-bound',

	template: _.template($('.thumbnail-template').text()),

	events: {
		'click': 'showDetailView'
	},

	initialize: function() {
		$('.container').append(this.el);
		this.render();

	},

	render: function() {
		var renderedTemplate = this.template(this.model.attributes);
		this.$el.html(renderedTemplate);
	},

	showDetailView: function() {
		new DetailView({
			model: this.model
		});
	}
});


// create instances


var newPhoto = new PhotoCollection();

newPhoto.fetch().done(function() {
	newPhoto.each(function(photo) {
		new ThumbnailView({
			model: photo
		});
	});
});
