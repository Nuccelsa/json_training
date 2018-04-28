var app = {

  initialize: function () {
    $('#button-character').on('click', app.showCharacters);
    $('#button-ships').on('click', app.showShips);
  },

  showCharacters: function (event) {
    
    $.ajax ("https://swapi.co/api/people/?format=json", {
      success: function (data){
        // console.log(data.results["0"]);
        var data = data.results;
        
        for (var index = 0; index < data.length ; index++) {
          // OU : for (var index in data)

          // console.log(data[index].name);
          var characterNames = data[index].name;
          var list = $('<ul>');
          $('#list-names').html(list);

          var listItem = $('<li>');
          listItem.text(characterNames);
          listItem.addClass('list-names-li');

          list.append(listItem);
        }
        /* $('li').first().show('slow', function showNextOne() {
          $(this).next('li').show('slow', showNextOne);
        });   */ 
      }
    })
  },

  /* showShips: function (event) {
    
  } */

  
}

app.initialize();