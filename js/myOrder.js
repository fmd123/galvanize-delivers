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
  debugger;
  //Selector is for ALL card buttons
  event.preventDefault()//see MDN link above
  let card = $(event.target).parent()
  let price = card.find('.price').text()
  //console.log(typeof price)
  //price is a string
  let title = card.find('.card-title').text()
  console.log("ORDER THE ", title );
  addCart({price, title})
  //call addCart with an freshly created object for argument

//........................................remove after testing!
parsePrice(price);
console.log("price " + (typeof price) + price);
//.................................
});

//.........................................................

 function addCart(item){
    
    let cartItem = findInCart(item.title)
    //cartItem is just used to check in cart. 
    //item is used to add to cart
    if (cartItem){
    cartItem.quantity++ }
    else {
      // add to *item* to cart
      //cartItem is just used to check. 
      //Doesn't go into cart
      item.quantity = 1
      cart.push(item)
    }

    console.log('cart', cart)
    //call the fn that does all the heavy lifting.
    renderCart()
  }
// .....................................................
  function findInCart(title){
    let cartItem = null
    //is item already in cart or not? use cartItem to check
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].title === title) {
        cartItem = cart[i]
      }
    }
    console.log("inside findInCart() cartItem = "+ cartItem);
    return cartItem

  }
//........................................................

function renderCart() {
    // create a var so can work with table
    let tbody = $('#orderTable tbody')

    // https://api.jquery.com/remove/
    //takes element(s) out of DOM
    tbody.children().remove()
    tbody.append(`<tr>
      <td>HERE</td>
      <td>IT</td>
      <td>IS</td>
      </tr>`)
     // re-render tbody
     //reset the subtotal
     let subtotal = 0
  //   for (item of cart) {
  //     let price = parsePrice(item.price)

  //     if (item.quantity > 0 ) {
  //       tbody.append(`<tr>
  //         <td>${item.title}</td>
  //         <td>${item.quantity}</td>
  //         <td>${formatPrice(price)}</td>
  //         <td><a class="btn btn-primary remove-item" data-title="${item.title}">Remove</a></td>
  //       </tr>`)
  //     }
  //     subtotal += price * +(item.quantity)
  //   }

  //   // do calculate
  //   console.log("subtotal", subtotal)
  //   $('#subtotal').text(formatPrice(subtotal))
   }

  //.....................................................
function parsePrice(price) {
    // remove $ and replace with nothing.
    //return a floating pt number to renderCart fn.
    //turn into number
    return parseFloat(price.replace(/\$/, ''))
    
  }

  function formatPrice(price) {
    //this puts price into table with $ etc.
    console.log("formatPrice price is", price)
    return '$' + price.toFixed(2);
  }


});//END OF DOCUMENT READY

//https://api.jquery.com/event.preventdefault/

//.find() Description: Get the descendants of each element in the 
//current set of matched elements, filtered by a selector, 
//jQuery object, or element.

// WHEN DO I WANT to DO THE CALCULATIONS?
//The .text() method cannot be used on form inputs or scripts. To set or get the text value of input or textarea elements, use the .val() method. To get the value of a script element, use the .html() method. This is from: http://api.jquery.com/text/
