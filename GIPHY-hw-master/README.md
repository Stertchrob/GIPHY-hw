# GIPHY-hw
.then(function(response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div1>");
                
                var gifRating = $("<p>").text("Rating " + results[i++].rating);
                gifDiv.append(gifRating);

                
                var gifImage = $("<img>");
                gifImage.attr("src", results[i++].images.fixed_height_small_still.url);
                
                gifImage.attr("data-still", results[i++].images.fixed_height_small_still.url);
               
                gifImage.attr("data-animate", results[i++].images.fixed_height_small.url);
               
                gifImage.attr("data-state", "still");
                gifImage.addClass("image");
                gifDiv.append(gifImage);
               
                $("#showgifs").prepend(gifDiv);
                console.log(response);