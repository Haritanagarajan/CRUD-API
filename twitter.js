$(document).ready(function() {
    // Fetch cake data from the JSON file
    $.getJSON('twitter.json', function(data) {
      var specialsContainer = $('#specials-container');
     
      
      $.each(data.twitter, function(index, item) {
        var twitter = $('<div class="item"></div>');
        twitter.append('<img src="'+ item.image + '" alt="' + item.name + '" id="img"> ');
        twitter.append('<h3 id="ca1">' + item.name + '</h3>');
        twitter.append('<a href="#sec"><button type="button" class="btn btn-success" id="atc" >Tweet</button></a>')
        specialsContainer.append(twitter);
      });
   
    });
  });

  function validateapiform() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(
      JSON.stringify({
      
        username: username,
      password: password,
       
      })
    );
    console.log("success");
  
  }