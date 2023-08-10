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
/**
 * @param {*} drink 
 * @returns {*} // 提供した飲み物
 */
function offerDrink(drink) {
  if (drink === "coffee"){
    return "coffee";
  } else if (drink === "milk") {
    return "milk";
  } else {
    return "cafe latte";
  }
}

test(offerDrink("coffee"),"coffee");
test(offerDrink("milk"),"milk");
test(offerDrink("cafe latte"),"cafe latte");

// 注文された飲み物と提供した飲み物の比較
// /**
//  * @param {*} offer 
//  * @param {*} order 
//  * @returns {*} //
//  */
// function providedDrink(offer,order){

// }
