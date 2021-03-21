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
    // Send the DELETE request.
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

    console.log (newGroceryItem);
    console.log (newGroceryItem.name);
    // alert (`Pause`);

    if (newGroceryItem.name.toUpperCase () === "CLEAR") {
      // Send the DELETE request.
      $.ajax("/api/groceryall", {
        type: "DELETE",
        data: ""
      }).then(
        function() {
          console.log("deleted all grocery items");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }

    else {
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
    }
  });
});
