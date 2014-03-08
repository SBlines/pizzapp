/*global Backbone */
//var app = app || {};

// (function () {
// 	'use strict';

	// Todo Collection
	// ---------------

	// The collection of todos is backed by *localStorage* instead of a remote
	// server.
	var Pizzas = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: Pizza

		// // Save all of the todo items under the `"todos"` namespace.
		// localStorage: new Backbone.LocalStorage('pizza-backbone'),

		// // Filter down the list of all todo items that are finished.
		// delivered: function () {
		// 	return this.filter(function (pizza) {
		// 		return pizza.get('delivered');
		// 	});
		// },

		// // Filter down the list to only todo items that are still not finished.
		// remaining: function () {
		// 	return this.without.apply(this, this.delivered());
		// },

		// // We keep the Todos in sequential order, despite being saved by unordered
		// // GUID in the database. This generates the next order number for new items.
		// nextOrder: function () {
		// 	if (!this.length) {
		// 		return 1;
		// 	}
		// 	return this.last().get('order') + 1;
		// },

		// // Todos are sorted by their original insertion order.
		// comparator: function (pizza) {
		// 	return pizza.get('order');
		// }
	});

	var pizzas = new Pizzas;
	//pizzas.create({name:'HARD', topping: 'CODE'});
// })();
