// Variables
var $navSide = $('.navSide');
var $regionText = $(".regionText");
var $regionImg = $(".regionImg");
var $myChart = $("#myChart");

// Water Section Chart Data

var data = [
  {
    value: 28,
    color:"#994F34"
  },
  {
    value : 415,
    color : "#A4BA68"
  },
    
]

var options = {
  //Boolean - Whether we should show a stroke on each segment
  segmentShowStroke : true,
  
  //String - The colour of each segment stroke
  segmentStrokeColor : "#fff",
  
  //Number - The width of each segment stroke
  segmentStrokeWidth : 2,
  
  //Boolean - Whether we should animate the chart 
  animation : true,
  
  //Number - Amount of animation steps
  animationSteps : 100,
  
  //String - Animation easing effect
  animationEasing : "easeOutBounce",
  
  //Boolean - Whether we animate the rotation of the Pie
  animateRotate : true,

  //Boolean - Whether we animate scaling the Pie from the centre
  animateScale : false,
  
  //Function - Will fire on animation completion.
  onAnimationComplete : null
}

var canvas = document.getElementById("myChart").getContext("2d");
var myNewChart = new Chart(canvas).Pie(data, options);



// FUNCTIONS


// Showing and Hiding Bean Region Texts
function ShowAndHideRegions(){
    
  var regionImgNumber = $(this).index();
  
  for (var i = 0; i<$regionText.length; i++) {
    
    var regionTextNumber = $($regionText[i]).index();
    
    if(regionImgNumber === regionTextNumber) {
       $($regionText[i]).show();
    } else {
      $($regionText[i]).hide();
    }
  }
}

// Side Navigation Menu Animation
function slideOut() {
   $(this).animate({'marginLeft':'-0.2%'},200, "swing");
  }
  
function slideBack() {
 $(this).animate({'marginLeft':'-9%'},200, "swing");
}

// If page is scrolled past the intro video, show the side nav menu
function navSideAppear () {
  if ($(window).scrollTop() > $('#vidintro').height()) {
    $('.navSide').show();
  }
  else {
    $('.navSide').hide();
  }
}

// Generate chart

function generateChart (event, visible) {
  if (visible == true) {
    // Start the animation
    var canvas = document.getElementById("myChart").getContext("2d");
    var myNewChart = new Chart(canvas).Pie(data, options)
  } else {
    return false;
  }
}




$(document).ready(function () {

  $(window).scroll(navSideAppear);
  $navSide.hover(slideOut, slideBack);
  $regionImg.click(ShowAndHideRegions);
  $myChart.bind('inview', generateChart);

});





