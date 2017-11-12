// Write your Pizza Builder JavaScript in this file.

// Set Initial State
$(function() {
  // Ingredients
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");

  // Buttons
  $(".btn-crust, .btn-sauce").removeClass("active");

  // Gluten free SHOULD BE FREE!
  $(".price li:contains('gluten-free crust')").text(
    "$0 gluten-free crust"
  );

  // Price
  updatePrice();

  // Set Listeners
  handleBtn(".btn-pepperonni", ".pep");
  handleBtn(".btn-mushrooms", ".mushroom");
  handleBtn(".btn-green-peppers", ".green-pepper");
  handleBtn(".btn-crust", ".crust", "crust-gluten-free");
  handleBtn(".btn-sauce", ".sauce", "sauce-white");
});

function handleBtn(btnClass, targetClass, toggleClass) {
  $(btnClass).click(function() {
    $(this).toggleClass("active");

    if (toggleClass) {
      $(targetClass).toggleClass(toggleClass);
    } else {
      $(targetClass).toggle();
    }

    updatePrice();
  });
}

function updatePrice() {
  var total = 10;

  // Hide all
  $(".price li").hide();

  // Iterate over active toppings
  $.each($(".btn.active"), function(index, btn) {
    var ingredient = $(btn).text().toLowerCase();
    var $listElement = $("li:contains('" + ingredient + "')");

    var ingredientPrice = parseInt(
      $listElement.text().split(" ")[0].replace("$", "")
    );

    total += ingredientPrice;

    $listElement.show();
  });

  // Set total price!
  $(".price strong").text("$" + total);
}