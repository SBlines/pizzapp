//views/pizzas.js
//var app = app || {};
var PizzaView = Backbone.View.extend({
	el: '#order-form',

	template: _.template($('#pizzaListTemplate').html()),
  // collection: pizzas,
  // model: Pizza,


    initialize: function() {
      console.log('View initialized');
      this.listenTo(this.collection, 'add', this.render, this);
      //this.collection.on('change', this.render, this);
      //this.listenTo(this.model, 'destroy', this.remove);
      // this.render();
      //this.model.bind('change', _.bind(this.render, this));
      // this.model.on('change:status', this.render(), this);
      //this.model.on('destroy', this.remove, this);
      //console.log(this.model);

      // this.listenTo(pizzas, 'add', this.render, this);
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
      // debugger;
      this.$el.html( this.template({collection: this.collection}) );
    
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
        // debugger;
        this.collection.create({name: nameInput, topping: toppingInput});
        document.getElementById("new-name").value = '';
        document.getElementById("new-topping").value = '';
      } else { 
        alert('You did not fill in all the fields');
      }
    //pizzaView.render();
  },

  deleteOrder: function(){
    console.log("Destroy button pressed");
    
    // console.log(this);
    // console.log(this.model);
    // console.log(this.collection);
    // debugger;
    // console.log(this.collection.model());
    // console.log(Pizza);
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

var pizzaView = new PizzaView({collection: pizzas});



     

















