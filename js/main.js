// jsを記述する際はここに記載していく

// scroll
$(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });
// Google mapアイコン
  function initMap() {
    var latlng = new google.maps.LatLng(35.6843218, 139.70311200000003); //中心の緯度, 経度
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: latlng
    });
    var marker = new google.maps.Marker({
      position: latlng, //マーカーの位置（必須）
      map: map, //マーカーを表示する地図
      icon: 'icon_blue.png' //マーカー画像のURL
    });
  }

  (function($) {
    var $nav   = $('#navArea');
    var $btn   = $('.toggle_btn');
    var $mask  = $('#mask');
    var open   = 'open'; // class
    // menu open close
    $btn.on( 'click', function() {
      if ( ! $nav.hasClass( open ) ) {
        $nav.addClass( open );
      } else {
        $nav.removeClass( open );
      }
    });
    // mask close
    $mask.on('click', function() {
      $nav.removeClass( open );
    });
  } )(jQuery);