/*global Backbone */


//Not using this currently

(function () {
	'use strict';

	// Pizza Router
	// ----------
	var PizzaRouter = Backbone.Router.extend({
		routes: {
			'': 'home'
		}
	});

	var pizzaRouter = new PizzaRouter();
	pizzaRouter.on('route:home'), function(){
		PizzaView.render(); //pizzaView?
		}

	Backbone.history.start();
	

	})();
