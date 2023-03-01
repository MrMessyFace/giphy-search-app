var searchInput = document.querySelector('#query-term')
var giphyForm = document.querySelector('#giphy-form')
var clearBtn = document.querySelector('#clear-btn')
var imageContainer = document.querySelector('#giphy-images')
var titleContainer = document.querySelector('#image-title')

function displayGiphys(event) {
  event.preventDefault()
  var searchTerm = searchInput.value
  var requestUrl = 'https://api.giphy.com/v1/gifs/search?api_key=9yUzHNeiHUaqLUCq3qP2bGIUE25lygD3&limit=5&rating=g&q=' + searchTerm
  console.log(requestUrl)

  fetch(requestUrl)
    .then(function(response) {
      console.log('The status of this page is', response.status + '.');
      return response.json();
    }).then(function(giphs) {
      console.log('You searched for:', giphs.data);
      
      for (var i = 0; i < giphs.data.length; i++) {
        var title = giphs.data[i].title
        var imageTag = document.createElement('img')
        var imageTitle = document.createElement('p')
        imageTag.setAttribute('src', giphs.data[i].images.original.url)
        imageTitle.textContent = title
        imageContainer.append(imageTag)
        titleContainer.append(imageTitle)
      }
    });
};

function clearScreen() {
  location.reload();
};

giphyForm.addEventListener('submit', displayGiphys)
clearBtn.addEventListener('click', clearScreen)