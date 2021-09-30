var clickNum = 0;
var luckPoints = 0;
var inventory = [0, 0, 0];
var objectProduction = [1,12,40];
var objectPrice = [10,100,500];

var myElementMainDice = document.getElementById("dicePlace");
var myElementLuckyCounter = document.getElementById("luckCounter");
// --------------------------------------------------------------

function updatePrice(){
  document.getElementById("D2price").innerHTML = objectPrice[0];
  document.getElementById("D4price").innerHTML = objectPrice[1];
}

function buyObject(object){
  console.log("Comprar");
  if(luckPoints >= objectPrice[object]){
      inventory[object]++;
      luckPoints -= objectPrice[object];
      objectPrice[object] = Math.floor(objectPrice[object] * 1.2 + 1.1);
  }
  updatePrice();
}

function production(){
  for(object = 0; object<inventory.length; object++){
    luckPoints += inventory[object] * objectProduction[object];
  }
}

function rollDice(Size) {
  var ranNum = Math.floor(Math.random() * Size) + 1;
  return ranNum;
}

function oneClick() {
  var roll = rollDice(6);
  luckPoints += 1;
  clickNum++;
  document.getElementById("mainDice").innerHTML = roll;
  document.getElementById("clickCount").innerHTML = clickNum;
}

// -----------------------------------

function render() {
  myElementLuckyCounter.innerHTML = luckPoints;
  document.getElementById("D2Inventory").innerHTML = `<span class="textDice">D2</span> D2: ${inventory[0]}`
  document.getElementById("D4Inventory").innerHTML = `<span class="textDice">D4</span> D4: ${inventory[1]}`

}


document.body.addEventListener('click', function(event) {
  if (myElementMainDice.contains(event.target)) {
    oneClick();
  }
});

// --------------------------------
var FPSproduction = 1;
var FPS = 30;

window.onload = function() {
  updatePrice();
}

setInterval(function(){
  production();
}, 1000 / FPSproduction);

setInterval(function(){
  render();
}, 1000 / FPS);
