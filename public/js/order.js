const btn = document.getElementById("order-btn");

function onClickOrder() {
  var stripe = Stripe(
    "pk_test_51HYOloCDutZFgDqXsBWvQcDc26dncoOA7IfEqxomyi5COfardY4VfSoyteOe9WQQTyB5xON65RwbJVLNYLAWlp7h00wFriVhAF"
  );
  stripe.redirectToCheckout({
    sessionId: "<%= sessionId %>",
  });
}

btn.addEventListener("click", onClickOrder);
