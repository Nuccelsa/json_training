var app = {

  initialize: function () {
    $('#button-character').on('click', app.showCharacters);
    $('#button-details').on('click', app.showMore);
  },

  showCharacters: function (event) {
    
    $.ajax ("https://swapi.co/api/people/?format=json", {
      success: function (data){
        // console.log(data.results["0"]);
        var data = data.results;
        var list = $('<ul>');
        $('#list-names').html(list);

        for (var index = 0; index < data.length ; index++) {
          // OU : for (var index in data)

          // console.log(data[index].name);
          var characterNames = data[index].name;
          var listItem = $('<li>');

          listItem.text(characterNames);
          listItem.addClass('list-names-li');
          list.append(listItem);
        }
      }
    })
  },

  showMore: function (event) {
    console.log('coucou2');
  }
}

app.initialize();