$(document).ready(function(){

var keywords = ['article', 'text', 'javascript', 'html', 'css', 'congress', 'contact', 'website', 'search', 'words', 'paragraph', 'city','project','fontend','design', 'contents'];

var searchbox = document.getElementById('searchbox');
var input = document.getElementById('search-box');
var totalResults = document.getElementById('results');
var autocomplete_results = document.getElementById('autocomplete-results');
var source_to_show;
var results;

var autocomplete= function(val) {
  var source_return = [];

  for (var j=0; j<val.length; j++) {
      if (val[j] !== "") {
          for (var i = 0; i < keywords.length; i++) {
            if (keywords[i].indexOf(val[j]) === 0 && source_return.indexOf(keywords[i]) === -1) {

                  source_return.push(keywords[i]);
            }
          }
      }
  }
  return source_return;
};


input.onkeyup = function(e) {
  input_val = input.value.toLowerCase();
  input.style.fontStyle = 'normal';
  input_val.slice();
  console.log('d');

  if (input.value === '') {
    input.style.fontStyle = 'oblique';
    autocomplete_results.innerHTML = '';

  }

  if (input_val.length > 0 && input_val.length < 20) {
    source_to_show = [];

    autocomplete_results.innerHTML = '';
    source_to_show = autocomplete(input_val.split(" "));
    
    for (i = 0; i < source_to_show.length; i++) {
      autocomplete_results.innerHTML += '<li><a>' + source_to_show[i] + '</a></li>';

    }
    
    $('#results').css('display', 'block');

    $('#results li a').click(function(){
      input.value = this.text;
    });

    
  } else {
    source_to_show = [];
    source_to_show_pages = [];
    autocomplete_results.innerHTML = '';
  }

};

})

