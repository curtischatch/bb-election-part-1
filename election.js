document.addEventListener("DOMContentLoaded", function() {

  // Imagination!

  var electionbtn = document.querySelector('#step1 button')

  electionbtn.addEventListener('click', function() {
    $.ajax({
      url: 'https://bb-election-api.herokuapp.com/',
      method: 'GET',
      dataType: 'JSON',
    }).done(function(responseData) {
      console.log(responseData)
      step1.append(responseData)
    });
  })
})
