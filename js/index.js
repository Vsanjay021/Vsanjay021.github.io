$(document).ready(function () {
    $("#menu").click(function () {
      $(this).toggleClass("fa-times")
      $("header").toggleClass("toggle")
    })
  
    $(window).on("scroll load", function () {
      $("#menu").removeClass("fa-times")
      $("header").removeClass("toggle")
  
      if ($(window).scrollTop() > 0) {
        $(".top").show()
      } else {
        $(".top").hide()
      }
    })
  
    // smooth scrolling
  
    $('a[href*="#"]').on("click", function (e) {
      e.preventDefault()
  
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top,
        },
        500,
        "linear"
      )
    })
  })
  
  function hello() {
    console.log("hii")
  }
  
  function gotodrive(){
    window.open("https://drive.google.com/file/d/1xAMT5DS-3kOdrSSTBKUJlggGoKYql-Z3/view?usp=share_link");
  }