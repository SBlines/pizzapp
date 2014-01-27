/*global Backbone */
//var app = app || {};

(function () {
	'use strict';

	// Todo Router
	// ----------
	var PizzaRouter = Backbone.Router.extend({
		routes: {
			'': 'home'
		}
	});

	// not sure why this is here---    var pizzaView = new PizzaView;

	var pizzaRouter = new PizzaRouter();
	pizzaRouter.on('route:home'), function(){
		PizzaView.render(); //pizzaView?
		}

	Backbone.history.start();
	

	})();
