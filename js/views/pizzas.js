//views/pizzas.js
//var app = app || {};
var PizzaView = Backbone.View.extend({
	el: '#order-form',

	template: _.template($('#pizzaListTemplate').html()),
  collection: pizzas,
  model: Pizza,


    initialize: function() {
      console.log('View initialized');
      //this.listenTo(this.model, 'change', this.render());
      //this.on('change', this.render, this);
      //this.listenTo(this.model, 'destroy', this.remove);
      // this.render();
      //this.model.bind('change', _.bind(this.render, this));
      console.log(this);
      // this.model.on('change:status', this.render(), this);

      
     // _.bindAll(Pizza, "render");
     // this.model.bind('change', this.render);
     this.render();
    },

    render: function(){
      console.log('Attempting render');


      //cancel render if no new updates?
      // if (this.model.changed.id !== undefined) {
      //   return;
      // }

      this.$el.html( this.template( this.collection.toJSON() ) );
    
      return this;

    },

    events: {
      'click #order': 'placeOrder',
      'click #delBut': 'deleteOrder',
      'click #cookBox': 'togCook',
      'click #deliverBox': 'togDeliver'
    },
    

    placeOrder: function(){
      console.log("Attempting to placeOrder");
      if(this.verify()){
      var nameInput = $('#new-name').val();
      var toppingInput = $('#new-topping').val();
      pizzas.create({name: nameInput, topping: toppingInput});
      document.getElementById("new-name").value = '';
      document.getElementById("new-topping").value = '';
    }
    else{ alert('You did not fill in all the fields');}
    
  },

  deleteOrder: function(){
    console.log("Destroy button pressed");
  },

  verify: function(){
    //verify can be done in Model when saving
    if($('#new-name').val().length > 0 && $('#new-topping').val().length > 0){
      return true;
    }
    else{return false;}
  },

  togCook: function(){
    console.log("cookBox clicked");
    // console.log(this);
    // console.log(this.model);
    // this.model.set({status: 'cooked'});
  },

togDeliver: function(){
    console.log("deliverBox clicked");
  }

});

var pizzaView = new PizzaView();



     

















