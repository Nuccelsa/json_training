var app = {

  initialize: function () {
    $('#button-character').on('click', app.showCharacters);
  },

  showCharacters: function (event) {
    $.ajax ("https://swapi.co/api/people/?format=json", {
      success: function (datas){ 
  
        var data = datas.results;
        app.loop(data);
        $('.name').on('click', app.showMore);
     
      } // success
    }) // ajax
  }, // showCharacters()

  loop: function(data){
    var ul = $('<ul class=list-names>');
    $('.lists').html(ul);

    for (var index = 0; index < data.length ; index++) {
      var characterNames = data[index].name;
      var li = $(`<li id="name-`+ index + `">`);
      li.text(characterNames).addClass('name');
      ul.append(li);
      
      var html = 
          `<ul>
              <li>
                  Eye color : `
                  + data[index].eye_color +
              `</li>
              <li>
                  Hair color : `
                  + data[index].hair_color +
              `</li>
              <li>
                  Birthday : `
                  + data[index].birth_year +
              `</li>
          </ul>`;
      li.append(html);

      $('.name').children().css('display', 'none');
    }  // for
  }, // loop()

  showMore: function (evt) {
    $(this).children().css('display', 'block');
  } // showMore()

} // app
$(app.initialize);