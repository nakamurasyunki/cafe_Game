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

// 注文された飲み物と提供した飲み物の比較
function providedDrink(offer, order) {
  if (offer === order) {
    return true;
  } else {
    return false;
  }
}

let result = providedDrink();

const modalButton = document.querySelector("#modalButton");
const resultModalToggleLabel = document.querySelector("#resultModalToggleLabel");
const startModalButton = document.querySelector("#startModalButton");
const modalClose = document.querySelector("#modalClose");
const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function startModal() {
  await _sleep(2500);
  modalClose.click();
  fiveOrder();
}

function getPerson(guestGender) {
  let picsNumber = 0;
  if (guestGender === "man") {
    picsNumber = 0;
  } else if (guestGender === "women") {
    picsNumber = 1;
  } else if (guestGender === "man2") {
    picsNumber = 2;
  } else {
    picsNumber = 3;
  }
  return picsNumber;
}

let changeFace;
// 男女ランダム
function randomPerson() {
  const guestPerson = ["man", "women", "man2", "women2"];

  let guestGender = guestPerson[Math.floor(Math.random() * guestPerson.length)];
  changeFace = function (result) {
    const picsNumber = getPerson(guestGender);
    const happyPerson = ["../IMG/man_happy.jpg", "../IMG/women_happy.jpg", "../IMG/man2_happy.jpg", "../IMG/women2_happy.jpg"]
    const angryPerson = ["../IMG/man_angry.jpg", "../IMG/women_sad.jpg", "../IMG/man2_angry.jpg", "../IMG/women2_sad.jpg"]
    if (result === true) {
      document.getElementById("guestPerson").src = happyPerson[picsNumber];
    } else {
      document.getElementById("guestPerson").src = angryPerson[picsNumber];
    }
  }
  return guestGender;
}

// 性別画像判定

function isGender(guestGender) {
  const picsPerson = ["../IMG/man.jpg", "../IMG/women.jpg", "../IMG/man2.jpg", "../IMG/women2.jpg"];
  const picsNumber = getPerson(guestGender);
  document.getElementById("guestPerson").src = picsPerson[picsNumber];
  return picsPerson[picsNumber];
}
isGender(randomPerson());

// 実動作
async function startGame() {
  let position = 2;
  document.querySelector("#guestPerson").style.width = position + "%";
  document.querySelector("#guestPerson").style.height = position + "%";
  document.querySelector("#guestPerson").style.visibility = "visible";
  for (let i = 1; i <= 9; i++) {
    position += 2;
    document.querySelector("#guestPerson").style.width = position + "%";
    document.querySelector("#guestPerson").style.height = position + "%";
    await _sleep(150);
  }
  document.querySelector(".drinkOrder").style.visibility = "visible";
  document.querySelector(".offerSelect").style.visibility = "visible";
}

function offSelect() {
  const select = document.selectMenu.offer;

  for (let i = 0; i < select.length; i++) {
    select[i].checked = false;
  }
}
async function changePerson(counter) {
  await _sleep(1000);
  document.querySelector(".drinkOrder").style.visibility = "hidden";
  offSelect();
  let position = 100;
  for (let i = 1; i <= 10; i++) {
    position += 50;
    document.querySelector("#guestPerson").style.left = position + "px";
    await _sleep(150);
  }
  document.querySelector("#guestPerson").style.visibility = "hidden";
  document.querySelector(".offerSelect").style.visibility = "hidden";
  document.querySelector("#guestPerson").style.left = 0 + "px";
  await _sleep(2000);
  if (counter >= 5) {
    window.location.href = "congratulations.html";
  } else {
    fiveOrder();
  }
}



// 提供する飲み物
let counter = 0;
let resultCounter = 0;
function fiveOrder() {
  isGender(randomPerson());
  let orderDrink = drinkMenu[Math.floor(Math.random() * drinkMenu.length)];
  counter += 1;
  console.log(counter);
  document.getElementById("order").innerHTML = "Hi! <br>Can I get a " + orderDrink + " ?";
  startGame();
  document.getElementById("submitMenu").onclick = function () {
    let selectDrink = "";
    let drinkList = "Cafe Latte";
    const drink = document.selectMenu.offer;

    for (let i = 0; i < drink.length; i++) {
      if (drink[i].checked) {
        drinkList = drink[i].value;
      }
    }
    selectDrink = drinkList;
    result = providedDrink(selectDrink, orderDrink);
    if (result === true) {
      resultCounter += 1;
      changeFace(result);
      document.getElementById("order").innerHTML = "Thank You!!";
    } else {
      changeFace(result);
      document.getElementById("order").innerHTML = "Sorry...,You are wrong";
    }
    changePerson(counter);
  }
}

startModalButton.click();
startModal();