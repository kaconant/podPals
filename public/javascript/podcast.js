console.log('podcast.js connected!')


// Submit a new Review

$(function () {

    let reviewRating = 5;
    let reviewComment = $("#comment").val();
    let reviewUser = 1;

    $('.newCommentBtn').click( (e) => {

        e.preventDefault();

        let data = { "rating": reviewRating, "comment": reviewComment, "UserId": reviewUser };

        $.ajax({
            type: "POST",
            url: `http://localhost:3000/podcasts/2/reviews`,
            // The key needs to match your method's input parameter (case-sensitive).
            data: data,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data){alert(data)},
            failure: function(errMsg) {
            alert(errMsg);
            }
        });
        console.log(data);
    })
}); 