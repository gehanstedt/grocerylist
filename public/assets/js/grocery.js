// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-basket").on("click", function(event) {
    var id = $(this).data("id");
    var inBasketStatus = $(this).data("in-basket");
    var newBasketStatus;

    if (inBasketStatus == false) {
      newBasketStatus = true;
    }
    else {
      newBasketStatus = false;
    }

    console.log (`inBasketStatus: ${inBasketStatus}`);
    console.log (`newbasketStatus: ${newBasketStatus}`);

    var inBasketState = {
      in_basket: newBasketStatus
    };

    console.log (inBasketStatus);

    // Send the PUT request.
    $.ajax("/api/grocery/" + id, {
      type: "PUT",
      data: inBasketState
    }).then(
      function() {
        console.log("changed sleep to", inBasketStatus);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-grocery").on("click", function(event) {
    var id = $(this).data("id");
    // Send the PUT request.
    $.ajax("/api/grocery/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("delete grocery item with id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newGroceryItem = {
      name: $("#ca").val().trim(),
      in_basket: $("[name=in_basket]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/grocery", {
      type: "POST",
      data: newGroceryItem
    }).then(
      function() {
        console.log("created new grocery item");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
