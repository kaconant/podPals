console.log('podcast.js connected!')


// Submit a new Review

$(function () {

    $('.newCommentBtn').click( (e) => {

        e.preventDefault();

        var reviewRating = $( "input[type=radio][name=rating]:checked" ).val();
        var reviewComment = $( "input[type=comment][name=comment]" ).val();
        var reviewUser = 1;

        let data = { "rating": reviewRating, "comment": reviewComment, "UserId": reviewUser };
        let podcastId = $(".podcastInfo").data("id");

        // Make ajax request to post form data to podcasts/:id/reviews
        $.ajax({
            type: "POST",
            url: `http://localhost:3000/podcasts/${podcastId}/reviews`,
            data: data,
            success: function(data, textStatus, xhr) {
                if (xhr.status !== 204) {
                    var obj = JSON.parse(data)
                }
            },
            failure: function(errMsg) {
            alert(errMsg);
            }
        });
        location.reload();
    });
}); 