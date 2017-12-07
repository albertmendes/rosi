$(document).ready(function() {

  /* Burger Menu */

  var menuToggle = false;
  $(".burgerMenu").on("click", function() {
    $(".burgerMenu span").css("background", "#333");
    if(menuToggle === false) {
      $(this).toggleClass("active");
      $(".mobile-menu").addClass("mobile-menu-toggle");
      menuToggle = true;
    }
    else {
      $(".burgerMenu span").css("background", "#fff");
      $(this).toggleClass("active");
      $(".mobile-menu").removeClass("mobile-menu-toggle");
      menuToggle = false;
    }
  });

  /******************/

  $(".portrait-wrapper").on("click", function() {
    $('html, body').stop().animate({
      scrollTop: 0
    }, 1000, 'easeInOutExpo', function() {
      /*history.pushState(null, null, "#home");*/
    });
  });
  $(".gotobio").on("click", function(e) {
    e.preventDefault();
    $('html, body').stop().animate({
      scrollTop: $("#bio").offset().top
    }, 1000, 'easeInOutExpo', function() {
      /*history.pushState(null, null, "#bio");*/
    });
  });

  $(".navi a").on("click", function(e) {
    e.preventDefault();
    var $hash = $(this).attr('href');
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top) 
    }, 1000, 'easeInOutExpo', function() {
      /*history.pushState(null, null, $hash);*/
    });
  });

  $(".mobile-menu a").on("click", function() {
    switch($(this).attr("href")) {
      case "#home":
	$(".portrait-wrapper").trigger("click");
	break;
      case "#bio": 
	$(".bioLink").trigger("click");
	break;
      case "#gallery":
	$(".galleryLink").trigger("click");
	break;
      case "#contact":
	$(".contactLink").trigger("click");
    }
  });

  /* Gallery img item */
  /* the following code is now in gallery_ajax.inc */

/*
  $(".img-wrapper").on("mouseenter", function() {
    $(this).find(".inner-border-transform-2").animate({"borderWidth": "20px"}, 200);
    $(this).find(".caption").toggleClass("toggle");
  });
  $(".img-wrapper").on("mouseleave", function() {
    $(this).find(".inner-border-transform-2").animate({"borderWidth": "0px"}, 200);
    $(this).find(".caption").toggleClass("toggle");
  });
*/

  /**************/

  $(".img-wrapper").each(function() {
    $(this).css("height", $(this).find("img").height());
  });

  /* Magnfic Popup */

  $('.gallery-wrapper').magnificPopup({
    delegate: 'a.img-item',
    type:'image',
    mainClass: 'mfp-width-zoom',
    zoom: {
      enabled: true,
      duration: 500,
      easing: 'ease-in-out'
    },
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      tPrev: 'Voriges',
      tNext: 'Nächstes'
    }
  });
  $('.bio-wrapper').magnificPopup({
    delegate: 'a',
    type:'image',
    mainClass: 'mfp-width-zoom',
    zoom: {
      enabled: true,
      duration: 500,
      easing: 'ease-in-out'
    },
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      tPrev: 'Voriges',
      tNext: 'Nächstes'
    }
  });

  /**********************/


});

$(window).resize(function() {
  $(".img-wrapper").each(function() {
    $(this).css("height", $(this).find("img").height());
  });
});

$(window).scroll(function() {
  var sT = $(document).scrollTop() + 5;

  /* DEBUG */
  /*
  $(".portrait-wrapper").css("color", "white");
  $(".portrait-wrapper").html(sT);
  */
  /**********/

  if(sT > 3900) {
    $("div.kostprobe").animate({opacity : 1}, 500);
  }

  if(sT >= $("#bio").offset().top && sT < $("#gallery").offset().top ) {
    $(".bioLink").addClass("active");
    $(".galleryLink").removeClass("active");
    $(".contactLink").removeClass("active");
  }
  if(sT >= $("#gallery").offset().top && sT < $("#contact").offset().top) {
    $(".bioLink").removeClass("active");
    $(".galleryLink").addClass("active");
    $(".contactLink").removeClass("active");

    $(".img-item").each(function(index) {
      $(this).delay(150*index).animate({opacity: 1}, 500);
    });

  }

  var contactShow = 0;
  if(sT > 4650) {
    if(contactShow == 0) {
      $("div.left-contact").addClass("show");
      $("div.right-contact").addClass("show");
      contactShow = 1;
    }
  }
  if(sT >= $("#contact").offset().top) {
    $(".bioLink").removeClass("active");
    $(".galleryLink").removeClass("active");
    $(".contactLink").addClass("active");
  }
  if(sT < $("#bio").offset().top) {
    $(".bioLink").removeClass("active");
    $(".galleryLink").removeClass("active");
    $(".contactLink").removeClass("active");
  }
  

});

/* EMAIL */

function sendMail() {
  var name = $("#name").val();
  var email = $("#email").val();
  var msg = encodeURI($("#msg").val());

  $.get("./sendmail.php?name=" + name + "&email=" + email + "&msg=" + msg, function(data) {
    if(data === "Versendet.") {
      console.log("jup");
      $("#name").val('');
      $("#email").val('');
      $("#msg").val('');
    }
    $("#submit").val(data);
  });
  setTimeout(function() {
    $("#submit").val("Senden");
  }, 3000);
}

/*****************/
