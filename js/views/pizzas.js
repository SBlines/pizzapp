//views/pizzas.js
//var app = app || {};
var PizzasView = Backbone.View.extend({
	el: '#order-form',

	template: _.template($('#pizzaListTemplate').html()),
  // collection: pizzas,
  // model: Pizza,


    initialize: function() {
      console.log('View initialized');
      this.listenTo(this.collection, 'add', this.render, this);
      //this.listenTo(this.collection, 'remove', this.render, this); // causes double render
      this.listenTo(this.collection, 'destroy', this.render, this);

      this.collection.on('change', this.render, this);
      // this.model.on('change:status', this.render(), this);
      //this.model.on('destroy', this.remove, this);
      //console.log(this.model);

      // this.listenTo(pizzas, 'add', this.render, this);
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
      var self = this;
      this.collection.forEach(function(pizza) {
        var pizzaView = new PizzaView({model: pizza});
        //debugger;
        self.$el.find('tbody').append(pizzaView.render().el);

      })
    
      return this;

    },

    events: {
      'click #order': 'placeOrder',
      // 'click .delBut': 'deleteOrder',
      // 'click .cookBox': 'togCook',
      // 'click .deliverBox': 'togDeliver'
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
  },

  verify: function(){
    //verify can be done in Model when saving
    if($('#new-name').val().length > 0 && $('#new-topping').val().length > 0){
      return true;
    }
    else{return false;}
  }

});

var pizzasView = new PizzasView({collection: pizzas});



     

















