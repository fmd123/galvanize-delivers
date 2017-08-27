
$(document).ready(() => {
  let cart = [];

  // add to cart
  $('.card .btn').click((event) => {
    event.preventDefault()
    // console.log("you clicked", event.target)
    let card = $(event.target).parent();
    let price = card.find('.price').text();
    let title = card.find('.card-title').text();

    addToCart({price, title})
  })

  // // remove from cart
  // $('#orderTable').click('.remove', (event) => {
  //   let title = $(event.target).data("title")
  //   console.log("title in remove", title)
  //   removeFromCart(title)
  // })

  // function removeFromCart(title) {
  //   let existingItem = findInCart(title)
  //   if (existingItem && existingItem.quantity > 0) {
  //     existingItem.quantity--
  //   }

  //   renderCart()
  // }

  function addToCart(item){
    //debugger;
    // check if in cart, if so update
    let existingItem = findInCart(item.title)

    if (existingItem){
      console.log("item exists", existingItem)
      existingItem.quantity++
    }
    else {
      // else add to cart with qty of 1
      item.quantity = 1
      cart.push(item)
    }

    console.log('cart', cart)

    renderCart()
  }
  //........................................

  function findInCart(title){
    let existingItem = null
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].title === title) {
        existingItem = cart[i]
      }
    }
    return existingItem
  }
//...................................................
  function renderCart() {
    // find table
    var tbody = $('#orderTable tbody')

    // clear out all order data
    tbody.children().remove()
    console.log("tbody after .remove " + tbody)
    // re-render tbody
    let subtotal = 0;
    for (item of cart) {
      let price = parsePrice(item.price)
      debugger;
      console.log(item.quantity)
      console.log(item.title)
      if (item.quantity > 0 ) {
        $(tbody).append("<tr><td>HERE</td><td>IT</td><td>IS</td></tr>");
       }
       console.log("tbody after .append " + tbody)
      subtotal += price * +(item.quantity)

    }
    taxIt(subtotal);
    //subtotal and total
    console.log("subtotal", subtotal)

    //use .text to put text into subtotal div
    $('#subtotal').text(formatPrice(subtotal))
    //ADD A FUNCTION TO DO THE TAX AND TOTAL
    //10% tax
    var total = subtotal * 1.10;
    $('#total').text(formatPrice(total))


  }
//................................................

  function parsePrice(price) {
    return parseFloat(price.replace(/\$/, ''))

  }

  //...............................................

  function formatPrice(price) {
    //makes entries for total & subtotal with $ & 2 decimal places .
    console.log("formated price" +  price)
    return '$' + price.toFixed(2)

  }

})

function taxIt(subtotal){

  $('#total').text(formatPrice(total))

}
