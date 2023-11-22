$(document).ready(function(){
    //과제 : 햄버거 버튼 클릭하면 메인메뉴 나오면서 햄버거버튼 스위치되도록 처리


    // 풀페이지 설정해오기 / 섹션 4,5.푸터는 정상스크롤값으로 설정/ 상단이동버튼 보이게해야함/ 풀페이지 부분에는 계속해서 상단영역으로 이동하게됨.이것을 제거해주기
    new fullpage('#wrap', {
        scrollBar : true,
        normalScrollElements : '.sec-4,.sec-5,.footer',
        fitToSection : false,
        scrollingSpeed: 300,
        responsiveWidth: 1800,
        responsiveHeight: 890,
    });

    // submenu
    $('.main-menu li').mouseenter(function(){
        let result = $(this).attr('data-tab');
        $('.sub-menu').removeClass('active');
        $(`#${result}`).addClass('active');

        $('.sub-menu-box').addClass('active');

        $('.header-area,.header-logo svg').addClass('active');

        $('sub-menu-box').mouseleave(function(){
            $(this).removeClass('active');
            $('.header-area,.header-logo svg').removeClass('active');
        });
    });


    // sec-4 swiper
    //세로 자동으로 굴러가는 스와이프 연결해보기
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        loop:true,
        speed: 500,
        autoplay:{
            delay: 1500,

        }

      });
   
    // var swiper = new Swiper(".sec-4", {
    //         effect: "fade",
    //         loop:true,
    //         autoplay:{
    //             delay:1500
    //         },
    

    // 상단이동버튼 300px 이상일 때 최상단으로 올라가는 상단이동버튼 구현해보기
    // (배너에서 없어져있다가 sec1에서부터 보이게) > 클릭했을 때 최상단으로 이동하는 부분까지!

        $(window).scroll(function(){
            let sct = $(window).scrollTop();
            if(sct >= 300){
                $('.top-btn').fadeIn();
            }else{
                $('.top-btn').fadeOut();
            }
        });


          //클릭하면 최상단으로 이동시키기
          $('.top-btn').click(function(){
            $('html,body').animate({
                scrollTop : 0
            }),500;
        });
        
    });





      // <script>
      // $(document).ready(function(){
      //     new fullpage('#wrap', {
      //         //섹션 컬러 추가해보기
      //         sectionsColor: ['lightpink','lightcoral','lightblue','lightyellow'],
      //         // 새로고침 시 상단으로 이동하는 부분 막아주기
      //         anchors : ['anchor1','anchor2','anchor3','anchor4'],
      //         //스크롤바 생성
      //         scrollBar:true,
      //         // 지정한 섹션에는 스크롤을 정상값으로 돌려주기
      //         normalScrollElements:'.sec-4,.footer',
      //         //높이값이 풀페이지가 아닌 경우 풀페이지 상단 영역으로 올라가는 것 막아주기
      //         fitToSection : false,
      //     });

      //     // 상단이동버튼(스크롤이벤트 활용)
      //     // 스크롤상단값이 300이상일때 상단이동버튼 fadeIn 미만일때 fadeOut
      //     $(window).scroll(function(){
      //         const sct = $(window).scrollTop();
      //         console.log(sct);

      //         if(sct >= 300){
      //             $('.top-btn').fadeIn();
      //         }else{
      //             $('.top-btn').fadeOut();
      //         }
      //     });

      //     //클릭하면 최상단으로 이동시키기
      //     $('.top-btn').click(function(){
      //         $('html,body').animate({
      //             scrollTop : 0
      //         }),500;
      //     });


    //   var swiper = new Swiper(".mySwiper", {
    //     effect: "fade",
    //     loop:true,
    //     autoplay:{
    //         delay:1500
    //     },
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     }