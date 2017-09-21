
//Youtube video
$(function() {
  $(".demo").ycp({
    apikey : 'AIzaSyCj2GrDSBy6ISeGg3aWUM4mn3izlA1wgt0',
    playlist : 7,
    autoplay : false,
    related : true
  });
});

// date time
var date = moment().format('MMMM Do YYYY');
document.getElementById('date').innerHTML = date;

//Slider
$('.banner').terseBanner({
  arrow: true,
  animation: 'slide',
  useHover: true,
  auto: 100000
});

//Grid view

var time = undefined;
$(function(){
  var x = screen.width;
  //init
  if(x<481){
    $('.msrItems').msrItems({
      'colums': 1, //columns number
      'margin': 15, //right and bottom margin
    });
  }else if(x<769){
    $('.msrItems').msrItems({
      'colums': 2, //columns number
      'margin': 15, //right and bottom margin
    });
  }else{
    $('.msrItems').msrItems({
      'colums': 3, //columns number
      'margin': 15, //right and bottom margin
    });
  }

  //update columns size on window resize
  $( window ).on('resize', function(e) {
    clearTimeout(time);
    time = setTimeout(function(){
      $('.msrItems').msrItems('refresh');
    }, 200);
  })

  //load new elements(without updating existing)
  // $('.msrItems').msrItems('doload', [
  // 	'<div class="itm8 msrItem"></div>',
  // 	'<div class="itm9 msrItem"></div>',
  // 	'<div class="itm10 msrItem"></div>'
  // ]);

});
