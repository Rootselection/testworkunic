// Burger btn
$('.icon-menu').on('click', function(){
  $('.icon-menu').toggleClass('active')
  $('.menu__body').toggleClass('active')
});
// Burger btn

$('.steps__slider').slick({
  infinite: false,
  slidesToShow: 1,
  variableWidth: true,
  prevArrow: '<button class="slide-arrow prev-arrow"><svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 25L1 13L13 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  nextArrow: '<button class="slide-arrow next-arrow"><svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 25L13 13L1 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        centerMode: false,
      }
    },
  ]
});
// 

// function slickify(){
//   $('.examples__inner').slick({
//     prevArrow: '<button class="slide-arrow prev-arrow"><svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 25L1 13L13 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
//     nextArrow: '<button class="slide-arrow next-arrow"><svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 25L13 13L1 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
//       responsive: [
//           {
//               breakpoint: 2400,
//               settings: "unslick"
//           },
//           {
//             breakpoint: 768,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               variableWidth: false,
//               centerMode: false,
//               vertical: true,
//             }
//         }
//       ]
//   });
// }

// slickify();
// $(window).resize(function(){
//   var $windowWidth = $(window).width();
//   if ($windowWidth > 500) {
//       slickify();   
//   }
// });