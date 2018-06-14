$(document).ready(function(){

  console.log('index.js connected!')

    $("#search-bar").keyup( function(e) {
      var value = e.target.value.toLowerCase();
      var filteredData = $("#results").filter(value, function(podcast) {
        var foundInName    = podcast.name.toLowerCase().indexOf(searchString) > -1;
        return foundInName;
      });
      $('#results').html()
    });

  });
