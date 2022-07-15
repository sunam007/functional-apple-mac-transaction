/* console.log("i am now connected");

document.getElementById("large-ram").addEventListener("click", function () {
  console.log("");
});
document.getElementById("large-ram").addEventListener("click", function () {
  console.log("");
});
document.getElementById("large-ram").addEventListener("click", function () {
  console.log("");
});
document.getElementById("large-ram").addEventListener("click", function () {
  console.log("");
});
document.getElementById("large-ram").addEventListener("click", function () {
  console.log("");
});
document.getElementById("large-ram").addEventListener("click", function () {
  console.log("");
});
document.getElementById("large-ram").addEventListener("click", function () {
  console.log("");
}); */

function updateTotalPrice() {
  const totalPriceText = document.getElementById("total-price");
  const bestPriceText = document.getElementById("best-price").innerText;
  const xtraMemoryCostText = document.getElementById("ram-price").innerText;
  const xtraSsdCostText = document.getElementById("ssd-price").innerText;
  const deliveryCostText = document.getElementById("delivery-price").innerText;
  totalPriceText.innerText = parseInt(bestPriceText);
  parseInt(xtraMemoryCostText) +
    parseInt(xtraSsdCostText) +
    parseInt(deliveryCostText);
  console.log(totalPriceText.innerText);
  return totalPriceText.innerText;
}

// xtra memory cost button-action
document.getElementById("regular-ram").addEventListener("click", function () {
  const xtraMemoryCostText = document.getElementById("ram-price");
  xtraMemoryCostText.innerText = 0;
  console.log(xtraMemoryCostText.innerText);
  const a = updateTotalPrice();
});

document.getElementById("large-ram").addEventListener("click", function () {
  const xtraMemoryCostText = document.getElementById("ram-price");
  xtraMemoryCostText.innerText = 180;
  console.log(xtraMemoryCostText.innerText);
  const b = updateTotalPrice();
});

// xtra ssd cost button-action
document.getElementById("regular-ssd").addEventListener("click", function () {
  const xtraSsdCostText = document.getElementById("ssd-price");
  xtraSsdCostText.innerText = 0;
  console.log(xtraSsdCostText.innerText);
  const c = updateTotalPrice();
});
document.getElementById("medium-ssd").addEventListener("click", function () {
  const xtraSsdCostText = document.getElementById("ssd-price");
  xtraSsdCostText.innerText = 100;
  console.log(xtraSsdCostText.innerText);
  const d = updateTotalPrice();
});
document.getElementById("large-ssd").addEventListener("click", function () {
  const xtraSsdCostText = document.getElementById("ssd-price");
  xtraSsdCostText.innerText = 180;
});

// delivery charge button-action
document.getElementById("free-delivery").addEventListener("click", function () {
  const deliveryCostText = document.getElementById("delivery-price");
  deliveryCostText.innerText = 0;
});
document.getElementById("paid-delivery").addEventListener("click", function () {
  const deliveryCostText = document.getElementById("delivery-price");
  deliveryCostText.innerText = 20;
});

// var a = updateTotalPrice();
// console.log(a);
