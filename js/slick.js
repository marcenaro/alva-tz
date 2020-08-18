$(document).ready(function () {
  $('.slider').slick({
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows": true,
    "dots": true,
    "centerMode": true,
    "centerPadding": "22%",
    "autoplay": true,
    "autoplaySpeed": 1000,
    "speed": 1000,
    responsive: [
      {"breakpoint":1501, "settings": {"slidesToShow": 1, "arrows": true, "centerPadding": "160px"} },
      {"breakpoint":1199, "settings": {"slidesToShow": 1, "arrows": true, "dots": false, "centerMode": false} },
      {"breakpoint":991, "settings": {"slidesToShow": 1,"slidesToScroll": 1, "arrows": true, "dots": false, "centerMode": false} },
      {"breakpoint":767, "settings": {"slidesToShow": 1, "slidesToScroll": 1, "arrows": true, "dots": false, "centerMode": false} },
      {"breakpoint":575, "settings": {"slidesToShow": 1, "slidesToScroll": 1,  "arrows": true, "dots": false, "centerMode": false} },
      {"breakpoint":479, "settings": {"slidesToShow": 1, "slidesToScroll": 1, "arrows": true, "centerMode": false} }
  ]
     });
  });