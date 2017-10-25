//Attaching event handler to .dropdown selector.
$('.navbar-collapse').on({

    //fires after dropdown is shown instance method is called.(if you click //anywhere else)
    "shown.bs.navbar-collapse": function() { this.close= false; },

    //when dropdown is clicked
    "click": function() { this.close= true; },

    //when close event is triggered
    "hide.bs.navbar-collapse":  function() { return this.close; }
});