var app = {

  initialize: function () {
    $('#button-character').on('click', app.showCharacters);
  },

  showCharacters: function (event) {

    $.ajax ("https://swapi.co/api/people/?format=json", {
      success: function (datas){ 
        // console.log(data.results[0].name);
        var data = datas.results;

        for (var index = 0; index < data.length ; index++) {
          var characterNames = data[index].name;
          var ul = $('.list-names');
          var li = $(`<li id="name-`+ index + `">`);
          var html = 
              `<ul>
                  <li>
                      Couleurs des yeux :`
                      + data[index].eye_color +
                  `</li>
                  <li>
                      Couleurs des cheveux :`
                      + data[index].hair_color +
                  `</li>
                  <li>
                      Taille :`
                      + data[index].height +
                  `</li>
                  <li>
                      Poids :`
                      + data[index].mass +
                  `</li>
              </ul>`;
              console.log(html);
          
          li.text(characterNames).addClass('name');
          ul.append(li);

         li.on('click', showMore());

         function showMore(evt){
          li.append(html);
         }
        
        }  

      } // success
    }) // ajax
  } // show
} // app

$(app.initialize);