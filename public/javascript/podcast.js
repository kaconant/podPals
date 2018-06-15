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
        })
        .then(()=> { location.reload() });
    });

    // Update existing review w/ form in podcast.hbs
    $('.updateBtn').click( (e) => {
        e.preventDefault();

        let editHtml = `
                <form id="editForm" class="newInputReview">
                    <div class="form-group row">
                        <div class="col-sm-12 ratingAndComment">
                            <div class="card border-dark bg-bf mb-3">
                                <div id ="star-rating" class="star-rating">
                                    <input id="star-5" type="radio" name="rating" value=5>
                                    <label for="star-5" title="5 stars">
                                            <i class="active fa fa-star" aria-hidden="true"></i>
                                    </label>
                                    <input id="star-4" type="radio" name="rating" value=4>
                                    <label for="star-4" title="4 stars">
                                            <i class="active fa fa-star" aria-hidden="true"></i>
                                    </label>
                                    <input id="star-3" type="radio" name="rating" value=3>
                                    <label for="star-3" title="3 stars">
                                            <i class="active fa fa-star" aria-hidden="true"></i>
                                    </label>
                                    <input id="star-2" type="radio" name="rating" value=2>
                                    <label for="star-2" title="2 stars">
                                            <i class="active fa fa-star" aria-hidden="true"></i>
                                    </label>
                                    <input id="star-1" type="radio" name="rating" value=1>
                                    <label for="star-1" title="1 star">
                                            <i class="active fa fa-star" aria-hidden="true"></i>
                                    </label>
                                </div>
                                <div class="col-sm-12 commentForReview">
                                <input type="comment" id="comment" class="form-control newComment" name="comment" placeholder="Add a comment...">
                                <button type="submit" class="btn btn-secondary newCommentBtn">Submit</button>
                                </div>
                            </div>    
                        </div>
                    </div>
                </form>
  `;
        $(e).parent().html(editHtml);
    });


    $("#editSubmitButton").click((e) => {
        let reviewRating = $( "input[type=radio][name=rating]:checked" ).val();
        let reviewComment = $( "input[type=comment][name=comment]" ).val();
        let reviewUser = 1;

        let data = { "rating": reviewRating, "comment": reviewComment, "UserId": reviewUser };
        let podcastId = $(".podcastInfo").data("id");
        let reviewId = $(".podcastCard").data("id");

        // Make ajax request to PATCH form data to podcasts/:id/reviews
        $.ajax({
            type: "PATCH",
            url: `http://localhost:3000/podcasts/${podcastId}/reviews/${reviewId}`,
        })
        .then(()=> { console.log('updating review'); location.reload() });
        });        

    // Delete a review
    $('.deleteBtn').click( (e) => {
        e.preventDefault();
        let podcastId = $(".podcastInfo").data("id");
        let reviewId = $(".podcastCard").data("id");
        // Make ajax request to delete review
        $.ajax({
            type: "DELETE",
            url: `http://localhost:3000/podcasts/${podcastId}/reviews/${reviewId}`,
        })
        .then(()=> { console.log('reloading'); location.reload() });
    });
}); 
