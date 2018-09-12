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
      responseData.candidates.forEach(function(candidate) {
        var listCandidates = document.createElement('li')
        listCandidates.innerHTML = '<br>' + candidate.name + ':</br> ' + candidate.votes + ' votes';
        election.append(listCandidates)
      });
    })
  })



})

//
// }).done(function(responseData){
//     responseData.candidates.forEach(function(candidate) {
//       var li = document.createElement('li')
//       li.innerHTML = '<b>' + candidate.name + ':</b> ' + candidate.votes + ' votes';
//       ulElection.append(li)
//     })
