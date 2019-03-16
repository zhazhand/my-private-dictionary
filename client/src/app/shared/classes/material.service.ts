
import * as $ from 'jquery';

export class MaterialService {

  static toast(message: string) {
    let cover = $('<div/>').addClass('cover');
     $('button[type="submit"]').parent().append(cover);
    let item = $('<div/>').addClass('toast-item').text(message);
    let container = $('<div id="toast-container"><div/>').append(item);

    $('body').append(container);
    $('#toast-container').fadeIn(1000).delay(2000).fadeOut(900,
      function () {
        $('#toast-container').remove();
        $('.cover').remove();
      });
  }

  // $(window).on('scroll', () => {
  //   var scrolled = $(window).pageYOffset || $(document).documentElement.scrollTop;
  //   var nav = $(".portrait").offsetHeight || $(".desktop").offsetHeight;
  //   if (scrolled > nav * 9) {
  //     $("#toTop").css("display","block");
  //   } else {
  //     $("#toTop").css("display","none");
  //   }
  // })
}
