/* ===================================================================

 *

 * Scripts de juanmallet.com, mi página web personal

 *

 * =================================================================== */

"use strict";

$(window).on("load", function () {
  /*------------------

		Preloder

	------------------*/

  $(".loader").fadeOut();

  $("#preloder").delay(400).fadeOut("slow");

  if ($(".portfolios-area").length > 0) {
    var containerEl = document.querySelector(".portfolios-area");

    var mixer = mixitup(containerEl);
  }
});

(function ($) {
  /*------------------

		Navigation

	------------------*/

  $(".nav-switch").on("click", function (event) {
    $(".main-menu").slideToggle(400);

    event.preventDefault();
  });

  /*------------------

		Back2Top

	------------------*/

  $(window).scroll(function () {
    var height = $(window).scrollTop();

    if (height > 100) {
      $("#back2Top").fadeIn();
    } else {
      $("#back2Top").fadeOut();
    }
  });

  $(document).ready(function () {
    $("#back2Top").click(function (event) {
      event.preventDefault();

      $("html, body").animate({ scrollTop: 0 }, "slow");

      return false;
    });
  });

  /*------------------

		Cookie-Alert

	--------------------*/

  (function () {
    "use strict";

    var cookieAlert = document.querySelector(".cookiealert");
    var acceptCookies = document.querySelector(".acceptcookies");

    if (!cookieAlert) {
      return;
    }

    cookieAlert.offsetHeight; // Forzar el navegador para activar el reflujo (https://stackoverflow.com/a/39451131)

    // Mostrar la alerta si no se encuentra la cookie "acceptCookies"
    if (!getCookie("acceptCookies")) {
      cookieAlert.classList.add("show");
    }

    // Al hacer clic en el "agree button" se crea una cookie de 1 año
    // para recordar la elección del usuario y cerrar el banner
    acceptCookies.addEventListener("click", function () {
      setCookie("acceptCookies", true, 365);
      cookieAlert.classList.remove("show");
      $("#back2Top").css("bottom", "20px");

      // dispatch the accept event
      window.dispatchEvent(new Event("cookieAlertAccept"));
    });

    // Funciones de cookies de w3schools
    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    // Subir el Back2Top para que no se solape con el banner
    if ($(".cookiealert").hasClass("show")) {
      $("#back2Top").css("bottom", "80px");
    }
  })();

  /*--------------------

		Dropbox idiomas

	--------------------*/

  $(".selected").click(function () {
    $(".custom-sel").toggleClass("show-sel");
    $(".custom-sel a:not(:first)").toggleClass("hidden");
    $(".fa-caret-down").toggleClass("fa-caret-up");
  });

  /*------------------

		Background set

	--------------------*/

  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");

    $(this).css("background-image", "url(" + bg + ")");
  });

  /*-----------------------

		Portfolio layout

	-----------------------*/

  var port_fi = $(".portfolios-area .first-item"),
    port_si = $(".portfolios-area .second-item"),
    port_intro_h = $(".portfolio-intro").innerHeight();

  if ($(window).width() > 991) {
    port_fi.appendTo(".portfolio-intro");

    port_si.find(".portfolio-item").height(port_intro_h + 601);
  }

  $(".portfolio-item.pi-style2").each(function () {
    var pi_width = $(this).width();

    $(this).height(pi_width + 50);
  });

  /*---------------------------

		Portfolio adjustments

	---------------------------*/

  //Ajustar la retícula del portfolio

  $("#design-btn").click(function () {
    $(".adjust4-6").removeClass("col-lg-4").addClass("col-lg-6");
  });

  $("#all-btn").click(function () {
    $(".adjust4-6").removeClass("col-lg-6").addClass("col-lg-4");
  });

  //Esconder algunos elementos del portfolio para una carga de la página más rápida

  $(".portfolio-item-hidden").hide();

  // Evitar que el href del botón te lleve arriba quitando los atributos por defecto

  $("a#showMore").click(function (e) {
    e.preventDefault();
  });

  //Enseñar los elementos escondidos mediante un botón y esconderlo

  $("#showMore").click(function () {
    $(".portfolio-item-hidden").show("slow");

    $("#showMore").fadeOut("slow");
  });

  $("#design-btn").click(function () {
    $("#showMore").fadeOut("slow");

    $("#portfolio-item-fairtrade").hide();
  });

  $("#web-btn").click(function () {
    $("#showMore").fadeOut("slow");
  });

  /*------------------

		Popup

	--------------------*/

  $(".portfolio-item").magnificPopup({
    type: "image",

    mainClass: "img-popup-warp",

    removalDelay: 400,
  });

  /*------------------

		Accordions

	------------------*/

  $(".panel-link").on("click", function (e) {
    $(".panel-link").parent(".panel-header").removeClass("active");

    var $this = $(this).parent(".panel-header");

    if (!$this.hasClass("active")) {
      $this.addClass("active");
    }

    e.preventDefault();
  });

  if ($().circleProgress) {
    //Set progress circle 1

    $("#progress1").circleProgress({
      value: 0.75,

      size: 146,

      thickness: 3,

      fill: "#979797",

      emptyFill: "rgba(0, 0, 0, 0)",
    });

    //Set progress circle 2

    $("#progress2").circleProgress({
      value: 0.83,

      size: 146,

      thickness: 3,

      fill: "#979797",

      emptyFill: "rgba(0, 0, 0, 0)",
    });

    //Set progress circle 3

    $("#progress3").circleProgress({
      value: 0.25,

      size: 146,

      thickness: 3,

      fill: "#979797",

      emptyFill: "rgba(0, 0, 0, 0)",
    });

    //Set progress circle 4

    $("#progress4").circleProgress({
      value: 0.95,

      size: 146,

      thickness: 3,

      fill: "#979797",

      emptyFill: "rgba(0, 0, 0, 0)",
    });
  }
})(jQuery);
