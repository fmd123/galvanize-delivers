$(document).ready(() => {



$("#orderPizza").on("click", function(){
  console.log("ORDER THE PIZZA");
  $("#cartData").clone().appendTo("tbody");
  // instead of doing a bunch of grabbing text and fussing around why not
  //clone and append a complete tr element that is associated with each item?
  //save the string to number stuff for just before subtotal
});

$("#orderRoyale").on("click", function(){
  console.log("ORDER THE Royale");
  $("#cartData").clone().appendTo("tbody");
  // for (#cartItem in tbody:last-child)
  $("#cartItem").text("Royale with Cheese");

});

$("#orderRibs").on("click", function(){
  console.log("ORDER THE Ribs");
  $("#cartData").clone().appendTo("tbody");
});

$("#orderIC").on("click", function(){
  console.log("ORDER THE Ice Cream BiscuIt");
  $("#cartData").clone().appendTo("tbody");
});


}//END OF DOCUMENT READY

// WHEN DO I WANT to DO THE CALCULATIONS?
//The .text() method cannot be used on form inputs or scripts. To set or get the text value of input or textarea elements, use the .val() method. To get the value of a script element, use the .html() method. This is from: http://api.jquery.com/text/
