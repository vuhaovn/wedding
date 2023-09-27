;(function($) {

  $(function() {

    $('a[href^="#"]').click(function(){
      const speed = 600;
      const href= $(this).attr("href");
      const target = $(href == "#" || href == "" ? 'html' : href);
      const position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      $('header').removeClass('active');
      $('.hamburger').removeClass('active');
      return false;
    });

    $(window).on("resize scroll", function() {
      var scroll = $(window).scrollTop();
      var albumOffset = $("#album").offset().top;

      if (scroll >= (albumOffset - 50)) {
        $("header nav").addClass('black');
      } else {
        $("header nav").removeClass('black');
      }

      if (scroll < $('#time').offset().top) {

        $('nav a').removeClass('current');
        $('nav a[data-scroll="introduce"]').addClass('current');

      } else if (scroll < $('#address').offset().top) {

        $('nav a').removeClass('current');
        $('nav a[data-scroll="time"]').addClass('current');

      } else if (scroll < $('#album').offset().top) {

        $('nav a').removeClass('current');
        $('nav a[data-scroll="address"]').addClass('current');

      } else if (scroll < $('#soluubut').offset().top -1) {

        $('nav a').removeClass('current');
        $('nav a[data-scroll="album"]').addClass('current');

      } else {

        $('nav a').removeClass('current');
        $('nav a[data-scroll="soluubut"]').addClass('current');

      }
    });

    $('.album_list').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: {
        enabled: true
      }
    });

    $('.modal-close').on('click', function() {
      $('#modal').hide();
    });

    $('.hamburger').on('click', function() {
      $(this).toggleClass('active');
      $('header').toggleClass('active');
    });

    var numFlowers = 20;

    // Hàm để tạo hoa mới và thêm vào trang
    function createFlower() {
      var flower = $('<div class="flower"></div>');
      $('#introduce').append(flower);

      // Thiết lập tọa độ ban đầu và animation ngẫu nhiên
      var startX = Math.random() * window.innerWidth;
      var startY = -100; // Để hoa bắt đầu từ dưới cùng
      flower.css({ left: startX, top: startY });

      // Animation ngẫu nhiên
      var duration = Math.random() * 5 + 5; // Thời gian bay từ 5 đến 10 giây
      var endX = Math.random() * window.innerWidth;
      var endY = window.innerHeight + 10; // Để hoa biến mất ở trên cùng
      flower.animate({ left: endX, top: endY }, duration * 1000, 'linear', function() {
        // Khi hoa bay đến điểm cuối, loại bỏ hoa khỏi trang
        $(this).remove();
        // Tạo một hoa mới để thay thế
        createFlower();
      });
    }

    // Tạo các hoa ban đầu
    for (var i = 0; i < numFlowers; i++) {
      createFlower();
    }

  })

})(jQuery);



