console.log('podcast.js connected!')


// Submit a new Review

$(function () {

    // Filter results on index.hbs w/ search bar
    $(".search-bar").on("keyup", function() {
        let value = $(this).val().toLowerCase();
        $(".podcastcard").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    
    // Submit a new review w/ form in podcast.hbs
    $('.newCommentBtn').click( (e) => {
        e.preventDefault();
        let reviewRating = $( "input[type=radio][name=rating]:checked" ).val();
        let reviewComment = $( "input[type=comment][name=comment]" ).val();
        let reviewUser = 1;

        let data = { "rating": reviewRating, "comment": reviewComment, "UserId": reviewUser };
        let podcastId = $(".podcastInfo").data("id");

        // Make ajax request to post form data to podcasts/:id/reviews
        $.ajax({
            type: "POST",
            url: `http://localhost:3000/podcasts/${podcastId}/reviews`,
            data: data,
            success: function(data, textStatus, xhr) {
                if (xhr.status !== 204) {
                    let obj = JSON.parse(data)
                }
            },
            failure: function(errMsg) {
            alert(errMsg);
            }
        });
        location.reload();
    });

}); 