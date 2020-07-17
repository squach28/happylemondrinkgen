let listOfDrinks = ["Green Tea with Salted Cheese" , "Black Tea with Salted Cheese" , "Chocolate Salted Cheese" ,
                    "Oolong Tea with Salted Cheese", "Milk Tea Oreo Tiramisu with Salted Cheese", "Chocolate Tiramisu with Salted Cheese",
                    "Matcha Latte Tiramisu with Salted Cheese" , "Milk Tea with Salted Cheese" , "Fresh Lemon Green Tea" ,
                    "Fresh Lemon Black Tea" , "Fresh Lemon Honey Green Tea" , "Freshly Squeezed Lemon Green Tea" ,
                    "Freshly Squeezed Lemon Black Tea" , "Freshly Squeezed Lemon Oolong Tea" , "Boba Milk Tea" , "Milk Tea w/o Boba",
                    "Oreo Milk Tea" , "Green Milk Tea" , "Boba Milk Tea with Puff Cream", "Mango Orange Milk Tea", "Lemon Slushy",
                    "Jasmine Lemon Slushy", "Yakult Lemon Slushy" , "Mango Lemon Slushy" , "Grapefruit Lemon Slushy" ,
                    "Yakult Green Tea" , "Grapefruit & Yakult" , "Lemon Yakult with Aloe", "Banana Matcha" , "Mango Matcha" ,
                    "Strawberry Milk Shake", "Mango Yakult Smoothie" , "Taro Milk Shake", "Passion Fruit Green Tea" ,
                    "Grapefruit Green Tea" , "Kumquat Lemon Green Tea", "Mango Boba Green Tea", "Grapefruit Oolong Tea",
                    "Strawberry Green Tea", "Strawberry Black Tea", "Strawberry Oolong Tea", "Pineapple Orange Green Tea" ,
                    "Pineapple Orange Black Tea" , "Pineapple Orange Oolong Tea", "Jasmine Green Tea", "Black Tea",
                    "Honey Green Tea" , "Light Oolong Tea", "Freshly Squeezed Lemon Green Tea" , "Freshly Squeezed Lemon Black Tea",
                    "Freshly Squeezed Lemon Oolong Tea", "Okinawa Fresh Milk with Boba"];

                    let listOfPics = ["./pictures/dab.jpg", "./pictures/thanos.gif", "./pictures/azumarill.jpg", "./pictures/hahayes.jpg", "./pictures/hangrycorgi.jpg",
                    "./pictures/hehedoge.jpg", "./pictures/longshibe.jpg", "./pictures/lovedoge.jpg", "./pictures/pikachu.jpg", "./pictures/smileydoge.jpg",
                    "./pictures/wooloo.jpg", "./pictures/beegyoshi.png", "./pictures/scareddog.jpg", "./pictures/closecat.jpg", "./pictures/thiccseel.jpg"];

let listOfToppings = ["Boba", "Lychee Jelly", "Lychee Jello", "Red Bean", "Pudding", "Taro", "Aloe", "Grass Jelly", "Puff Cream", "Crystal Boba",
                      "Mango Boba", "Salted Cheese", "Tiramisu Salted Cheese", "Mango Chunks"];

let listOfSweetness = ["100%", "75%", "50%", "25%", "0%"];

let modalBtn = document.getElementById("randomDrinkGenBtn");

let modal = document.querySelector(".modal");

let closeBtn = document.querySelector(".close");

let randomToppingBtn = document.getElementById("randomToppingBtn");

let randomTopping = document.getElementById("randomTopping");

modalBtn.onclick = function() {
  var resultText = document.getElementById("randomDrink");
  var randomItem = listOfDrinks[Math.floor(Math.random()*listOfDrinks.length)];
  var randomPic = listOfPics[Math.floor(Math.random() * listOfPics.length)];
  document.getElementById("modalPic").src = randomPic;
  resultText.innerHTML = "Your drink is..." + randomItem;
  modal.style.display = "block";

}

closeBtn.onclick = function() {
  modal.style.display = "none";
  randomToppingBtn.style.visibility = "visible";
  randomTopping.style.visibility = "hidden";
  randomSweetBtn.style.visibility = "visible";
  randomSweet.style.visibility = "hidden";
}

window.onclick = function(e) {
  if(e.target == modal) {
    modal.style.display = "none";
    randomToppingBtn.style.visibility = "visible";
    randomTopping.style.visibility = "hidden";
    randomSweetBtn.style.visibility = "visible";
    randomSweet.style.visibility = "hidden";
  }
}
// random topping button event handling
randomToppingBtn.onclick = function() {
  var randomToppingResult = listOfToppings[Math.floor(Math.random() * listOfToppings.length)];
  randomToppingBtn.style.visibility = "hidden";
  randomTopping.innerHTML = "Your topping is..." + randomToppingResult;
  randomTopping.style.visibility = "visible";
}
// random sweetness button event handling
randomSweetBtn.onclick = function() {
  var sweetResult = listOfSweetness[Math.floor(Math.random() * listOfSweetness.length)];
  randomSweetBtn.style.visibility = "hidden";
  randomSweet.innerHTML = "Your sweetness is..." + sweetResult;
  randomSweet.style.visibility = "visible";
}
