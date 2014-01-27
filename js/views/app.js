




//not using this file right now



var app = app || {};

(function ($) {
	'use strict';

	// The Application
	// ---------------

	// Our overall **AppView** is the top-level piece of UI.
	var PizzaView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '#pizzapp',

		// Our template for the line of statistics at the bottom of the app.
		statsTemplate: _.template($('#status-template').html()),

		// Delegated events for creating new items, and clearing completed ones.
		events: {
			'keypress #new-pizza': 'createOnEnter',
			'click #clear-completed': 'clearCompleted',
			'click #toggle-all': 'toggleAllComplete'
		},

		// At initialization we bind to the relevant events on the `Todos`
		// collection, when items are added or changed. Kick things off by
		// loading any preexisting todos that might be saved in *localStorage*.
		initialize: function () {
			this.allCheckbox = this.$('#toggle-all')[0];
			this.$input = this.$('#new-pizza');
			this.$footer = this.$('#footer');
			this.$main = this.$('#main');
			this.$list = $('#pizza-list');

			this.listenTo(app.pizzas, 'add', this.addOne);
			this.listenTo(app.pizzas, 'reset', this.addAll);
			this.listenTo(app.pizzas, 'change:delivered', this.filterOne);
			this.listenTo(app.pizzas, 'filter', this.filterAll);
			this.listenTo(app.pizzas, 'all', this.render);

			// Suppresses 'add' events with {reset: true} and prevents the app view
			// from being re-rendered for every model. Only renders when the 'reset'
			// event is triggered at the end of the fetch.
			app.pizzas.fetch({reset: true});
		},

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function () {
			var delivered = app.pizzas.delivered().length;
			var remaining = app.pizzas.remaining().length;

			if (app.pizzas.length) {
				this.$main.show();
				this.$footer.show();

				this.$footer.html(this.statsTemplate({
					delivered: delivered,
					remaining: remaining
				}));

				this.$('#filters li a')
					.removeClass('selected')
					.filter('[href="#/' + (app.PizzaFilter || '') + '"]')
					.addClass('selected');
			} else {
				this.$main.hide();
				this.$footer.hide();
			}

		},

		// Add a single todo item to the list by creating a view for it, and
		// appending its element to the `<ul>`.
		addOne: function (pizza) {
			var view = new app.PizzaView({ model: pizza });
			this.$list.append(view.render().el);
		},

		// Add all items in the **Todos** collection at once.
		addAll: function () {
			this.$list.html('');
			app.pizzas.each(this.addOne, this);
		},

		filterOne: function (pizza) {
			pizza.trigger('visible');
		},

		filterAll: function () {
			app.pizzas.each(this.filterOne, this);
		},

		// Generate the attributes for a new Todo item.
		newAttributes: function () {
			return {
				title: this.$input.val().trim(),
				order: app.pizzas.nextOrder(),
				delivered: false
			};
		},

		// If you hit return in the main input field, create new **Todo** model,
		// persisting it to *localStorage*.
		createOnEnter: function (e) {
			if (e.which === ENTER_KEY && this.$input.val().trim()) {
				app.pizzas.create(this.newAttributes());
				this.$input.val('');
			}
		},

		// Clear all completed todo items, destroying their models.
		clearCompleted: function () {
			_.invoke(app.pizzas.delivered(), 'destroy');
			return false;
		},

		toggleAllComplete: function () {
			var delivered = this.allCheckbox.checked;

			app.pizzas.each(function (pizza) {
				pizza.save({
					'delivered': delivered
				});
			});
		}
	});
})(jQuery);