function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("Test PASSED.");
  } else {
      console.error("Test FAILED. Keep trying!");
      console.group("Result:");
      console.log(actual);
      console.log(expected);
      console.trace();
      console.groupEnd();
  }
}

// ランダムで飲み物を注文
const drinkMenu = ["coffee","milk","cafe latte"];

let orderDrink = drinkMenu[Math.floor(Math.random() * drinkMenu.length)];
console.log(orderDrink)

// 提供する飲み物
function offerDrink(drink) {
  if (drink === "coffee"){
    return "coffee";
  } else if (drink === "milk") {
    return "milk";
  } else {
    return "cafe latte";
  }
}

let drink = offerDrink();

// 注文された飲み物と提供した飲み物の比較
function providedDrink(offer,order){
  if (offer === order){
    return "Thank You!!";
  } else {
    return "Sorry...,You are wrong";
  }
}

let result = providedDrink();

// test(providedDrink(drink,"coffee"));
// test(providedDrink(drink,"milk"));
// test(providedDrink(drink,"cafe latte"));


const modalButton = document.querySelector("#modalButton");
const resultModalToggleLabel = document.querySelector("#resultModalToggleLabel");
const startModalButton = document.querySelector("#startModalButton");
const modalClose = document.querySelector("#modalClose");

async function startModal() {
  await _sleep(2500);
  modalClose.click();
}

startModalButton.click();
startModal()