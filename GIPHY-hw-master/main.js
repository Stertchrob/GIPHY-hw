$( document ).ready(function() {    
    var buttonArray = ["The Office", "Workaholics", "Archer", "Family Guy", "F is for Family", "Tosh.O", "How I Met Your Mother", "South Park"];

    function displayGifButtons() {
        $("#gifButtons").empty();
        for (var i = 0; i < buttonArray.length; i++) {
            var gifButton = $("<button>");
            gifButton.addClass("show-btn btn-outline-success ml-2 mt-1")
            gifButton.addClass("show");
            gifButton.attr("data-show", buttonArray[i]);
            gifButton.text(buttonArray[i]);
            $("#gifButtons").append(gifButton);
                
        }
    }
        
    function addNewButton() {
        $("#gifadd").on("click", function() {
            var show = $("#input").val().trim();
            if (show == ""){
                return false;
            }
            buttonArray.push(show);

            displayGifButtons();
            return false;
        });
    }
    $("button").on("click", function() {

        var show = $(this).attr("data-show");
        
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        show + "&api_key=9lhnDPuUvgAY1VlvY2ATYGYCBGMLbkw7";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div1>");
                
                var gifRating = $("<p>").text("Rating " + results[i++].rating);
                gifDiv.append(gifRating);

                
                var showImage = $("<img>");
                showImage.attr("src", results[i++].images.fixed_height_small_still.url);
                
                showImage.attr("data-still", results[i++].images.fixed_height_small_still.url);
               
                showImage.attr("data-animate", results[i++].images.fixed_height_small.url);
               
                showImage.attr("data-state", "still");
                showImage.addClass("image");
                gifDiv.append(showImage);
               
                $("#showgifs").prepend(gifDiv);
                console.log(response);
            }
            
        });
    });

    displayGifButtons();
    addNewButton();
    

   
    
});
