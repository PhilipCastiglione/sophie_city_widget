// Technical Requirements
// Call $.val() on inputs to get the string value of your user's input
// Store user input in var city
// Use $.on(submit) or $.click to figure out when the user clicks the "submit" button
// Create if / else if / else conditionals to control the flow of your application
// Write at least six different lines of pseudocode and display them inline as JavaScript comments 
// Prevent a form submission using the event.preventDefault() function
// Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded 
// Get the first element from an attribute name using $.attr()
// Use the || operator in your conditionals to allow for multiple string values to execute if/else if statement code
// If a user submits:
// "New York" or "New York City" or "NYC" make the background of the page nyc.jpg 
// "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg 
// "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
// "Austin" or "ATX" make the background of the page austin.jpg
// "Sydney" or "SYD" make the background of the page sydney.jpg

$(document).ready(function(){
  var images=["images/austin.jpg","images/citipix_skyline.jpg","images/la.jpg","images/nyc.jpg","images/sf.jpg","images/sydney.jpg"];

  function changeBackground() {
    // first, make sure the default action of the button doesn't fire because
    // it will refresh the page and ruin your hard work
    event.preventDefault();

    // then, find the value of the input that the user entered from the relevant html
    // element and store it in a variable (called city)
    var city = $('#city-type').val();

    // then compare city to the expected strings - note how I'm using the || to mean OR and I have to do the
    // 'city ==' bit for each comparison after the OR operator as if it was there just by itself
    if (city == 'NYC' || city == 'New York City' || city == 'New York') {
      // then we just do the thing we want to do
      $('body').css('background-image', "url('images/nyc.jpg')");
    } else if (city == 'SF' || city == 'San Francisco' || city == 'Bay Area') {
      $('body').css('background-image', "url('images/sf.jpg')");
    }
  }

  // aaaand we make all this happen when someone clicks on the button we care about
  $('#submit-btn').click(changeBackground);
});