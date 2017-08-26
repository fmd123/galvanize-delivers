$(document).ready(() => {



  //What I need to do:
  //use the backpack shop code as a guide...
  //menu click handler
  //check if already in cart
  //update cart
  //Put in Cart
  //update subtotal etc. 
  //form
  //submit button
  //what this modal thingy???? 
  //surge and git.
  


  //variables needed: cart price name quantity
  //input: click event will grab price & name from cards
  
  //Add the variable values to the cart in proper places
  //output: info into table and then into subtotal & total
  let cart = [];

//function that is called when target clicked
$('.card .btn').click((event)=>{
  //Selector is for ALL card buttons
  event.preventDefault()//see MDN link above
  let card = $(event.target).parent()
  let price = card.find('.price').text()
  //console.log(price)
  let name = card.find('.card-title').text()
  console.log("ORDER THE ", name );
  addCart({price, title})
  //call addCart with an freshly created object argument
});


 function addCart(item){
    
    let cartItem = findInCart(item.title)
    //cartItem is just used to check in cart. 
    //item is used to add to cart
    if (cartItem){
    cartItem.quantity++ }
    else {
      // add to *item* to cart
      //cartItem is just used to check. Doesn't become 
      item.quantity = 1
      cart.push(item)
    }

    console.log('cart', cart)
    //call the fn that does all the heavy lifting.
    renderCart()
  }

  function findInCart(title){
    let cartItem = null
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].title === title) {
        cartItem = cart[i]
      }
    }
    console.log(cartItem);
    return cartItem
  }


});//END OF DOCUMENT READY

//https://api.jquery.com/event.preventdefault/

//.find() Description: Get the descendants of each element in the 
//current set of matched elements, filtered by a selector, 
//jQuery object, or element.

// WHEN DO I WANT to DO THE CALCULATIONS?
//The .text() method cannot be used on form inputs or scripts. To set or get the text value of input or textarea elements, use the .val() method. To get the value of a script element, use the .html() method. This is from: http://api.jquery.com/text/
