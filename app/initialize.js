var app = {

  initialize: function () {
    $('#button-character').on('click', app.showCharacters);
    $('#button-ships').on('click', app.showShips);
  },

  showCharacters: function (event) {
    
    $.ajax ("https://swapi.co/api/people/?format=json", {
      success: function (data){
          console.log(data.results[0].name);
          for (var index in data) {
              var data = data;
              var html =
                  `<li><span class="character-` +index + `>`
                            + data.results[index].name +
                        `</span></li>`;


              $('#list-names').html($('#list-names').html() + html);
              var listItem = $('<li>');
              listItem.addClass('list-names-li');
          }

          $('.character-' + index).on('click', app.showDetails);
      }
    })
  },

  showDetails: function (event) {
    var html = `<ul>
                   <li>
                       Couleurs des yeux :`
                        + data.results[index].eye_color +
                   `</li>
                    <li>
                       Couleurs des cheveux :`
                        + data.results[index].hair_color +
                   `</li>
                   <li>
                       Taille :`
                        + data.results[index].height +
                   `</li>
                   <li>
                       Poids :`
                        + data.results[index].mass +
                   `</li>
                </ul>`;

  }

/* showShips: function (event) {

} */

  
}

app.initialize();