$(document).ready(() => {

  //What I need to do:
  //use the backpack shop code as a guide...

  //Click event that creates the variables needed 
  //Add the variable values to the cart in proper places

$('.card .btn').click((event)=>{
  
  event.preventDefault()//see MDN link above
  let card = $(event.target).parent()
  console.log(card);
  //do I need this?
  
  let price = card.find('.price').text()
  console.log(price)
  let title = card.find('.card-title').text()
  console.log("ORDER THE ", title );
  add(price, title)
});




  


})//END OF DOCUMENT READY

//https://api.jquery.com/event.preventdefault/

//.find() Description: Get the descendants of each element in the 
//current set of matched elements, filtered by a selector, 
//jQuery object, or element.

// WHEN DO I WANT to DO THE CALCULATIONS?
//The .text() method cannot be used on form inputs or scripts. To set or get the text value of input or textarea elements, use the .val() method. To get the value of a script element, use the .html() method. This is from: http://api.jquery.com/text/
