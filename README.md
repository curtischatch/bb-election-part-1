# Bikini Bottom Election - Part 1
[See assignment in Alexa.](https://alexa.bitmaker.co/wdi/67/assignments/2056/latest)

#Parts

1. Listing out the current election results
2. Allowing the user to vote

#Server

https://bb-election-api.herokuapp.com/

#To Do

1.  In the election.js file, build an AJAX request that makes a GET request to the root path, and expects a JSON response.
Make sure you're making this request within your DOMContentLoaded block

2. Add a <ul> to your index.html file, with an id. This is what we'll attach our data to.

3. In the .done(function(responseData){}) callback function for the AJAX request loop over the candidates in responseData, and append a <li> element for each candidate into the DOM at our <ul> from the last step. You'll want to show the name and votes count of each candidate.
