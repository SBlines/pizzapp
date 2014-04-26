/*global Backbone */

// (function () {
// 	'use strict';

	// Pizzas Collection
	// ---------------

	// localStorage instead of a remote server.
	var Pizzas = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: Pizza
	});

	var pizzas = new Pizzas;
// })();
