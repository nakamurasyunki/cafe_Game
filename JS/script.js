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
const drinkMenu = ["Coffee", "Milk", "Cafe Latte"];


// 提供する飲み物
let selectDrink = "";
let orderDrink = drinkMenu[Math.floor(Math.random() * drinkMenu.length)];
for (let i = 1; i <= 5; i++) {
  document.getElementById("order").innerHTML = "Hi! <br>Can I get a " + orderDrink + " ?";
  document.getElementById("submitMenu").onclick = function () {
    let drinkList = "Cafe Latte";
    const drink = document.selectMenu.offer;

    for (let i = 0; i < drink.length; i++) {
      if (drink[i].checked) {
        drinkList = drink[i].value;
      }
    }
    selectDrink = drinkList;
    console.log(selectDrink);
    result = providedDrink(selectDrink, orderDrink);
    if (result === true) {

    }
    isGender(guestGender);
    console.log(i);
  }
}
"Thank You!!"
"Sorry...,You are wrong"
// function offerDrink(drink) {
//   if (drink === "Coffee") {
//     return "Coffee";
//   } else if (drink === "Milk") {
//     return "Milk";
//   } else {
//     return "Cafe Latte";
//   }
// }

// let drink = offerDrink(selectDrink);
// console.log(drink);

// 注文された飲み物と提供した飲み物の比較
function providedDrink(offer, order) {
  if (offer === order) {
    return true;
  } else {
    return false;
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
const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function startModal() {
  await _sleep(2500);
  modalClose.click();
}

startModalButton.click();
startModal()

// 男女ランダム
const guestPerson = ["man", "women"];

let guestGender = guestPerson[Math.floor(Math.random() * guestPerson.length)];
console.log(guestGender)

// 性別画像判定
const picsPerson = ["../IMG/man.jpg", "../IMG/women.jpg"];
let picsNumber = 0;
console.log(picsNumber);

function isGender(guestGender) {
  if (guestGender === "man") {
    picsNumber = 0;
  } else {
    picsNumber = 1;
  }
  console.log(picsNumber);
  document.getElementById("guestPerson").src = picsPerson[picsNumber];
}
isGender(guestGender);


// for (let i = 1; i <= 5; i++) {
//   if (i === 1) {
//     selectDrink;
//   } else if (i === 2) {
//     selectDrink;
//   } else if (i === 3) {
//     selectDrink;
//   } else if (i === 4) {
//     selectDrink;
//   } else if (i === 5) {
//     selectDrink;
//   }
//   console.log(selectDrink);
//   result = providedDrink(selectDrink, orderDrink);
//   console.log(result);
//   isGender(guestGender);
//   console.log(i);
// }
