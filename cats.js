$(document).ready(function(){



  $(".summon-cats").on('click', function(){
    $.ajax({
    url: 'http://bitkittens.herokuapp.com/cats.json',
    method: 'GET',
    dataType:'json'
  }).done(function(data){

      data.cats.forEach(function(cat){

        var imgSrc = cat.photo;
        var catName = cat.name;
        var iTag = $("<img/>", {
          src: imgSrc,
          alt: catName
        });

        $(".cat-box:empty:first").append(iTag);






      });



       });
    });
});
