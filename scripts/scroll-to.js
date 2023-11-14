$(document).ready(function() {

  $('[data-master-scroll-to]').each(function() {

    var target = $(this).data('master-scroll-to');

    if (target != '') {

      $(this).on('click', function() {
        $('html, body').animate({
          scrollTop: $('#' + target).offset().top
        }, 1000);
      });

    } else {
      console.log('Missing target');
    }

  });

});