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
  
  // function hello() {
  //   console.log("hii")
  // }
  
  function gotodrive(){
    window.open("https://drive.google.com/file/d/1xAMT5DS-3kOdrSSTBKUJlggGoKYql-Z3/view?usp=share_link");
  }

  GitHubCalendar(".calendar", "Vsanjay021");

  // or enable responsive functionality:
  GitHubCalendar(".calendar", "Vsanjay021", { responsive: true });

  // Use a proxy
  const username="Vsanjay021"
  GitHubCalendar(".calendar", "Vsanjay021", {
     proxy (username) {
       return fetch(`https://your-proxy.com/github?user=${username}`)
     }
  }).then((r) => console.log(r));

  
  let resumebtn1=document.getElementById("resume-button-1").addEventListener("click",()=>{
    window.location.assign("https://drive.google.com/file/d/1xAMT5DS-3kOdrSSTBKUJlggGoKYql-Z3/view?usp=share_link")
  })

  // let resumebtn2=document.getElementById("resume-button-2").addEventListener("click",()=>{
  //   window.location.assign("https://drive.google.com/file/d/1xAMT5DS-3kOdrSSTBKUJlggGoKYql-Z3/view?usp=share_link")
  // })
