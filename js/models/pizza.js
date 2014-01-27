/*global Backbone */
//var app = app || {};
// (function () {
// 	'use strict';

	// Pizza Model
	
	var Pizza = Backbone.Model.extend({
		initialize: function(){
			console.log("Model initialized");
			this.on('change:status', function(){
				console.log("The status of " + this.get('name') + "'s pizza has changed");
			});
		},

		
		defaults: {
			name: '',
			topping: '',
			status: 'pending'
		},

		url: '#'
		// validate: function( attributes ){
  //           if( attributes.name.length < 1 || attributes.order.length < 1 ){
  //               return "You did not fill in all the information";
  //           }
  //       }
	});
	
// })();



// book p34
// validate: function(stats){
// 	if(stats.name === undefined || stats.topping === undefined){
// 		return "Incomplete order";
// 	}
// },

// under initialize: 
// this.on('invalid', function(model, error){
// 	console.log(error);
// });