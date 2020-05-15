//jQuery(document).ready(function() {

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 30) {
    $("#nav").addClass("fixed-nav");
  } else {
    $("#nav").removeClass("fixed-nav");
  }
});
$(document).on("scroll", onScroll);

// $(".main-nav > li  ").on("click", function() {
//   var element = $(this).index();
//   console.log(element);
//   var item = $(".main-nav > li  ").eq(element);
//   if (item.hasClass("active") === true) {
//     $(this).css("color", "#0ed3f3");
//   } else {
//     $(this).css("color", "#10161a");
//   }
// });

// $(".main-nav > li").click(function() {
//   $(".main-nav > li.active").removeClass("active");
//   $(this).addClass("ative");
// });

$(".item").click(function (index) {
  var isAlreadySelected = $(this).hasClass("selected");
  $(".item").removeClass("selected");
  if (!isAlreadySelected) {
    $(this).addClass("selected");
  }
});
// $(".main-nav > li ").on("click", function() {
//   var scrollPos = $(document).scrollTop();

//   // var currLink = $(this);
//   // var refElement = $(currLink.attr("href"));
//   console.log($(this).position().top);
//   $(".main-nav > li.active").removeClass("active");
//   $(this).addClass("active");
// });

// $(".main-nav > li > a ").on("click", function(e) {
//   $(".main-nav > li.active").removeClass("active");
//   var $parent = $(this).parent();
//   $parent.addClass("active");
//   // e.preventDefault();
// });

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $(".main-nav > li > a ").each(function (indexLink) {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.offset().top - scrollPos <= 70) {
      $(".main-nav > li.active ").removeClass("active");
      $(".main-nav > li ")
        .eq(indexLink)
        .addClass("active");
      // $(".main-nav > li").each(function(indexItem) {
      //  var item = $(this);
      //   if (indexItem === indexLink) {
      //     $(".main-nav > li.active ").removeClass("active");
      //     item.addClass("active");
    }
  });
}
//});
// }

//});

$(".nav-collapse").click(function () {
  $("#nav").toggleClass("open");
});
$(".has-dropdown").click(function () {
  $(this).toggleClass("open-drop");
});

// //2

//3
// jQuery(document).ready(function() {
//   let c = 0;
//   $(".main-nav > li").click(function() {
//     var index = $(this).index();
//     if (c <= index) {
//       var intervalIncrease = setInterval(function() {
//         if (c === index) {
//           clearInterval(intervalIncrease);
//         }
//         $(".main-nav li.active").removeClass("active");
//         $(".main-nav > li")
//           .eq(c)
//           .addClass("active");
//         // console.log(c);
//         if (c < index) {
//           c++;
//         }
//       }, 1000);
//     }
//     // console.log(c);
//     if (c >= index) {
//       c = c - 1;
//       var intervalDecrease = setInterval(function() {
//         if (c === index) {
//           clearInterval(intervalDecrease);
//         }
//         $(".main-nav li.active").removeClass("active");
//         $(".main-nav > li")
//           .eq(c)
//           .addClass("active");
//         console.log(c);
//         if (c > index) {
//           c--;
//         }
//       }, 1000);
//     }
//   });
// });

// $(window).scroll(function() {
//   if ($('#nav a[href^="/about"]') === true) {
//     console.log("true");
//   }
// });
