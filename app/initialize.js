var app = {

  initialize: function () {
    $('#button-character').on('click', app.showCharacters);
    $('#button-ships').on('click', app.showShips);
  },

  showCharacters: function (event) {

    $.ajax ("https://swapi.co/api/people/?format=json", {
      success: function (datas){
        // console.log(data.results[0].name);
        var data = datas.results;
          
        for (var index = 0; index < data.length ; index++) {
          var characterNames = data[index].name;
          var ul = $('.list-names');
          var li = $('<li>');
          
          ul.append(li);
          li.text(characterNames).addClass('name');
        }  

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

$(app.initialize);