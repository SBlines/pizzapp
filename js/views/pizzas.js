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
      self.$el.find('tbody').append(pizzaView.render().el);
    })
  
    return this;

    },

  events: {
    'click #order': 'placeOrder',
  },
    

  placeOrder: function(){
    console.log("Attempting to placeOrder");
    if(this.verify()){
      var nameInput = $('#new-name').val();
      var toppingInput = [];
      //var toppingInput = $('#new-topping').val();

      $("input:checkbox[name=topping]:checked").each(function(){
        toppingInput.push(this.value);
       });
      console.log("Inputs we get: " + toppingInput);

      this.collection.create({name: nameInput, topping: toppingInput});
      document.getElementById("new-name").value = '';
      //document.getElementById("new-topping").value = '';
    }
    else { 
      alert('You did not fill in all the fields');
    }
  },

  verify: function(){
    //verify can be done in Model when saving
    //won't need to verify toppings once checkboxes are created. set default to chesse topping if no other boxes
    //if($('#new-name').val().length > 0 && $('#new-topping').val().length > 0){
    if($('#new-name').val().length > 0){
      return true;
    }
    else {
      return false;
    }
  }

});

var pizzasView = new PizzasView({collection: pizzas});




