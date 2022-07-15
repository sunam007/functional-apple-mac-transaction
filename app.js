// function for getting total price

function updateTotalPrice() {
  const totalPriceText = document.getElementById("total-price");
  const bestPriceText = document.getElementById("best-price").innerText;
  const xtraMemoryCostText = document.getElementById("ram-price").innerText;
  const xtraSsdCostText = document.getElementById("ssd-price").innerText;
  const deliveryCostText = document.getElementById("delivery-price").innerText;
  const footerTotalPriceText = document.getElementById("footer-total-price");
  const totalPrice =
    parseInt(bestPriceText) +
    parseInt(xtraMemoryCostText) +
    parseInt(xtraSsdCostText) +
    parseInt(deliveryCostText);
  totalPriceText.innerText = totalPrice;
  footerTotalPriceText.innerText = totalPrice;
  const promoCodeInputText = document.getElementById("promo-input");

  // when promo code is applied; prom code: stevekaku
  if (promoCodeInputText.value == "stevekaku") {
    totalPriceText.innerText = totalPrice - totalPrice * 0.2;
    footerTotalPriceText.innerText = totalPrice - totalPrice * 0.2;
    promoCodeInputText.value = "";
  } else {
    promoCodeInputText.value = "";
  }

  return totalPriceText.innerText;
}

// xtra memory cost button-action
document.getElementById("regular-ram").addEventListener("click", function () {
  const xtraMemoryCostText = document.getElementById("ram-price");
  xtraMemoryCostText.innerText = 0;
  console.log(xtraMemoryCostText.innerText);
  updateTotalPrice();
});

document.getElementById("large-ram").addEventListener("click", function () {
  const xtraMemoryCostText = document.getElementById("ram-price");
  xtraMemoryCostText.innerText = 180;
  console.log(xtraMemoryCostText.innerText);
  updateTotalPrice();
});

// xtra ssd cost button-action
document.getElementById("regular-ssd").addEventListener("click", function () {
  const xtraSsdCostText = document.getElementById("ssd-price");
  xtraSsdCostText.innerText = 0;
  console.log(xtraSsdCostText.innerText);
  updateTotalPrice();
});
document.getElementById("medium-ssd").addEventListener("click", function () {
  const xtraSsdCostText = document.getElementById("ssd-price");
  xtraSsdCostText.innerText = 100;
  console.log(xtraSsdCostText.innerText);
  updateTotalPrice();
});
document.getElementById("large-ssd").addEventListener("click", function () {
  const xtraSsdCostText = document.getElementById("ssd-price");
  xtraSsdCostText.innerText = 180;
  updateTotalPrice();
});

// delivery charge button-action
document.getElementById("free-delivery").addEventListener("click", function () {
  const deliveryCostText = document.getElementById("delivery-price");
  deliveryCostText.innerText = 0;
  updateTotalPrice();
});
document.getElementById("paid-delivery").addEventListener("click", function () {
  const deliveryCostText = document.getElementById("delivery-price");
  deliveryCostText.innerText = 20;
  updateTotalPrice();
});

//promo code button-action
document.getElementById("promo-code").addEventListener("click", function () {
  updateTotalPrice();
});
