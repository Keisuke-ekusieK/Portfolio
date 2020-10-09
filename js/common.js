$(document).ready(function(){
  $(".btn-gnavi").on("click", function(){
    // ハンバーガーメニューの位置を設定
    var leftVal = 0;
    if($(this).hasClass("open")) {
        // 位置を移動させメニューを開いた状態にする
        leftVal = -300;
        // メニューを開いたら次回クリック時は閉じた状態になるよう設定
        $(this).removeClass("open");
    } else {
        // メニューを開いたら次回クリック時は閉じた状態になるよう設定
        $(this).addClass("open");
    }

    $("#global-navi").stop().animate({
        left: leftVal
    }, 200);
  });

  $('.my-carousel').slick({
    prevArrow: '<i class="fas fa-chevron-left slide-arrow prev-arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right slide-arrow next-arrow"></i>',
    dots:true,
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: 'calc(25vw - 100px)',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: 'calc(15vw - 20px)',
          slidesToShow: 1
        }
      }
    ]
  });
});

/* 到達したら要素を表示させる */
function showElementAnimation() {
                    
  var element = document.getElementsByClassName('js-fadein');
  if(!element) return; // 要素がなかったら処理をキャンセル
                      
  var showTiming = window.innerHeight > 768 ? 200 : 80; // 要素が出てくるタイミングはここで調整
  var scrollY = window.pageYOffset; //スクロール量を取得
  var windowH = window.innerHeight; //ブラウザウィンドウのビューポート(viewport)の高さを取得
                    
  for(var i=0;i<element.length;i++) { 
    var elemClientRect = element[i].getBoundingClientRect(); 
    var elemY = scrollY + elemClientRect.top;
    if(scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('is-show');
    } else if(scrollY + windowH < elemY) {
    // 上にスクロールして再度非表示にする場合はこちらを記述
      element[i].classList.remove('is-show');
    }
  }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);