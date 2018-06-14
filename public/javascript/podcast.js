console.log('podcast.js connected!')


// Submit a new Review

$(function () {
    console.log($("#reviewForm").val());
    var reviewRating = $("input[name=rating]:checked").attr('value');
    var reviewComment = $("#comment").attr('value');
    var reviewUser = 1;

    $('.newCommentBtn').click( (e) => {

        e.preventDefault();

        let data = { "rating": reviewRating, "comment": reviewComment, "UserId": reviewUser };
        let podcastId = $(".podcastInfo").data("id");
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
    })
}); 