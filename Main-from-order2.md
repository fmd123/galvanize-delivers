random stuff from order2.html 

<div class = "container-fluid">

	<div class = "row" id = "menuCartRow">

		<div class = "float col-md-6 col-sm-12" id = "menu">
			<h2>MENU</h2>
			<div class = "row" id "topRow">

        <div class="card float" class = "col-md-6 col-sm-12">
              <img class="card-img-top" src="img/burger.jpg" alt="Card image cap">
              <div class="card-block" id = "royale">
                <h4 class="card-title">Royale with Cheese</h4>
                <p class="card-text" id = "8.99">$8.99</p>
                <a class="btn red" id = "orderRoyale">Add To Order</a>
              </div>
        </div>

            <div class="card float" class = "col-md-6 col-sm-12">
              <img class="card-img-top" src="img/pizza.jpg" alt="Card image cap">
              <div class="card-block" id = "pizza">
                <h4 class="card-title">Arugula Pie</h4>
                <p class="price" id = "11.99">$11.99</p>
                <a class="btn red" id = "orderPizza">Add To Order</a>
              </div>
            </div>
      </div>
      <div class = "row" id "lowerRow">
        <div class="card" class = "col-md-6 col-sm-12">
              <img class="card-img-top" src= "img/ribs.jpg" alt="Card image cap">
              <div class="card-block">
                <h4 class="card-title">Smoked Swine</h4>
                <p class="card-text">$14.99</p>
                <a class="btn red" id = "orderRibs">Add To Order</a>
              </div>
            </div>

            <div class="card" class = "col-md-6 col-sm-12">
              <img class="card-img-top" src="img/ice_cream.jpg" alt="Card image cap">
              <div class="card-block">
                <h4 class="card-title">Ice Cream Biscuit</h4>
                <p class="card-text" id = "7.99">$7.99</p>
                <a class="btn red"id = "orderIC" >Add To Order</a>
              </div>
            </div>
      </div><!--End of lowerRow-->
    </div> <!--End of Menu Column-->
		
<!-- BEGIN CART  -->
		<div class = "col-md-6 col-sm-12" id = "cart">
			<h2>CART</h2>
			<table class="table table-striped">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr id = "cartData">
              <td id = "cartItem">item here</td>
              <td id = "cartQty">Quantity</td>
              <td id = "cartPrice">price here</td>
            </tr>
          </tbody>

			
		</div> <!-- END OF cart column-->





	</div> <!-- END OF MenuCartRow-->