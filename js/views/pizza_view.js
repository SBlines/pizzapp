var PizzaView = Backbone.View.extend({
	className: 'pizza-row',
	tagName: 'tr',

	template: _.template($('#pizzaViewTemplate').html()),
  // collection: pizzas,
  // model: Pizza,
    events: {
      //'click #order': 'placeOrder',
      'click .delBut': 'deleteOrder',
      'click .cookBox': 'togCook',
      'click .deliverBox': 'togDeliver'
    },
    deleteOrder: function(event) {
    	//var deleteModel = this.collection.get($(event.target).data("id"));
    	this.model.destroy();
    },
  	render: function() {
  		//debugger;
      this.$el.html( this.template({pizza: this.model}) );
    
    	// debugger;
      return this;

  	},

  	togCook: function(){
    	console.log("cookBox clicked");
     	//console.log(this);
     	//console.log(this.model);
    	if(this.$('.cookBox').is(':checked')){
    		this.model.set({status:'cooked'});
    	}//checked sets to cooked
		else{
    		this.model.set({status:'pending'});
    	} // unchecked sets to pending
    },

	togDeliver: function(){
    	console.log("deliverBox clicked");
    	if(this.$('.cookBox').is(':checked') && this.$('.deliverBox').is(':checked')){
    		this.model.set({status:'delivered'});
    	}//both checked sets to delivered
		else if (this.$('.cookBox').is(':checked')){
			this.model.set({status:'cooked'});
		}
		else{
			alert("Cannot deliver without cooking!");
			this.$('.deliverBox').prop('checked', false);
		}



		// 	if($('.cookBox').is(':checked')){
  //   		this.model.set({status:'cooked'});
  //   	}//checked sets to cooked
		// else{
  //   		this.model.set({status:'pending'});
  //   	}
    		
  	}
});




//  <%= this.get('status')=='cooked' ? 'checked' : '' %>
// <input type="checkbox" name="vehicle" value="Car">