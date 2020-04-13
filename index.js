'use strict';



function getDogImage(dogCountInput) {
  fetch(`https://dog.ceo/api/breeds/image/random/${dogCountInput}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Please try again later.'));
}



function displayResults(responseJson) {
    console.log(responseJson);
    $('.api-results').empty();
    for (let i = 0; i < responseJson.message.length; i++) {
      $('.api-results').append(`<img src="${responseJson.message[i]}">`);
    }
  }


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let dogCountInput = $('#dog-num-user-input').val();
    getDogImage(dogCountInput);
  });
}


$(function() {
  console.log('App loaded - Waiting for submit');
  watchForm();
});