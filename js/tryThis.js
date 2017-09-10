
$(document).ready(() => {
  let cart = [];
  let subt

  // add to cart
  $('.card .btn').click((event) => {
    event.preventDefault();
    // console.log("you clicked", event.target)
    let card = $(event.target).parent();
    let price = card.find('.price').text();
    let title = card.find('.card-title').text();

    addToCart({price, title});
  });

  // remove from cart

//https://stackoverflow.com/questions/6658752/click-event-doesnt-work-on-dynamically-generated-elements
//USE .ON INSTEAD
  function removeFromCart(title) {

    let existingItem = findInCart(title);
    if (existingItem && existingItem.quantity > 0) {
      existingItem.quantity--;
    }

    renderCart();
  }

  function addToCart(item){
    //debugger;
    // check if in cart, if so update
    let existingItem = findInCart(item.title);

    if (existingItem){
      console.log("item exists", existingItem);
      existingItem.quantity++;
    }
    else {
      // else add to cart with qty of 1
      item.quantity = 1;
      cart.push(item);
    }

    console.log('cart', cart);

    renderCart();
  }
  //........................................

  function findInCart(title){
    let existingItem = null;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].title === title) {
        existingItem = cart[i];
      }
    }
    return existingItem;
  }
//...................................................
  function renderCart() {
    // find table
    var tbody = $('#orderTable tbody');

    // clear out all order data
    $('tbody').children().remove();
    //after removing all children, use cart data to renew the table data
    subtotal = 0;
    for ( item of cart) {
      let price = parsePrice(item.price);
      console.log(item.quantity);
      console.log(item.title);
      if (item.quantity > 0 ){
        $('tbody').append(`<tr>
          <td>${item.title}</td>
          <td>${item.quantity}</td>
          <td>${formatPrice(price)}</td>
          <td><a class="btn btn-primary remove-item" data-title="${item.title}">Remove</a></td>
        </tr>`);
       }

      subtotal += price * +(item.quantity);
      //the + in front will do a type coercion to make it a number
    }
    $('#orderTable .remove-item').click((event)=>{

    console.log("CLICKED");
    var title = $(event.target).data("title");
    console.log("title in remove", title);
    removeFromCart(title);
  });

    //use .text to put text into subtotal div
    $('#subtotal').text(formatPrice(subtotal));
    //10% tax
    var tax = subtotal * 0.10;
    $("#tax").text(formatPrice(tax));
    var totalVar = subtotal * 1.10;
    $('#total').text(formatPrice(totalVar));

  }
//................................................

  function parsePrice(price) {
    return parseFloat(price.replace(/\$/, ''));

  }

  //...............................................

  function formatPrice(price) {
    //makes entries for totalVar & subtotal with $ & 2 decimal places .
    console.log("formated price" +  price);
    return '$' + price.toFixed(2);

  }
// ................................................

$( "#orderBtn" ).click(function() {
    renderMessage();
});

function renderMessage(){
  if("#subtotal.text" === "$0.00"){
    console.log("hey");
    $('figcaption').append(`<p>Your Cart is Empty</p>`);
  }

}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
});
