console.log('podcast.js connected!')


// Submit a new Review

let submitButton = document.getElementById('submitButton');
let reviewUserId = document.getElementById('userId_field').value();
let reviewRating = document.getElementById('rating_field').value();
let reviewComment = document.getElementById('comment_field').value();

submitButton.addEventListener('click', function(event) { 
    event.preventDefault()
    var url = 'http://localhost:3000/podcasts/10/reviews';
    var data = { 
        UserId: reviewUserId,
        rating: reviewRating,
        comment: reviewComment
    };
    fetch( url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    console.log(res.json());
    }, false);