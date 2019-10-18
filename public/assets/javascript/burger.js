// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".btn-Burger").on("click", function(event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");
        let newDevouredStatus;
        
        if (devoured === 0 ) {
            newDevouredStatus = 1;
        } else {
            newDevouredStatus = 0;
        };
        
        var newBurgerState = {
            devoured: newDevouredStatus
        };
        
        // // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function() {
            console.log("changed devoured to", devoured);
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });

    $("#btn-createBurger2").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        
        const burger_name = $("#burgerInput").val().trim();
    
        var newBurger = {
            burger_name
        };
    
        // // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
            console.log("created new Burger");
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });
});
  