$(document).ready(function () {

  var iframe = $('#intro')[0],
      player = $f(iframe),
      status = $('.status');


  // When the player is ready, add listeners for pause, finish, and playProgress
  player.addEvent('ready', function() {
      status.text('ready');
      
      player.addEvent('pause', onPause);
      player.addEvent('finish', onFinish);
      player.addEvent('playProgress', onPlayProgress);
  });

  // Call the API when a button is pressed
  $('button').bind('click', function() {
      player.api($(this).text().toLowerCase());
  });

  function onPause(id) {
      status.text('paused');
  }

  function onFinish(id) {
      status.text('finished');
  }

  function onPlayProgress(data, id) {
      status.text(data.seconds + 's played');
  }


  //Pause the video when you click SKIP VIDEO.
  $("#pause").click(function() {
    player.api ("pause");
  });

});