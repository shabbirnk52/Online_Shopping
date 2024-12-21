"use strict";

$(document).ready(function () {
  showLoader();
  initializeSelect2();
  initUserThemePreference();

  setTimeout(function () {
    hideLoader();
  }, 2000);
  console.log("document ready");
  initializeAOS();

});


/*=============================================
=            Select 2 initialize            =
=============================================*/


function initializeSelect2() {
  try {
    if ($('body').css('direction') == 'rtl') {
      $('select:not(.no-search)').each(function () {
        if ($(this).closest(".modal").length) {
          var modalID = "#" + $(this).closest(".modal").attr("id");
          $(this).select2({
            dir: "rtl",
            theme: 'bootstrap',
            dropdownParent: modalID
          });
        }
        else {
          $(this).select2({
            dir: "rtl",
            theme: 'bootstrap'
          });
        }
      });
      $('select.no-search').each(function () {
        if ($(this).closest(".modal").length) {
          var modalID = "#" + $(this).closest(".modal").attr("id");
          $(this).select2({
            dir: "rtl",
            theme: 'bootstrap',
            dropdownParent: modalID,
            minimumResultsForSearch: Infinity
          });
        }
        else {
          $(this).select2({
            dir: "rtl",
            theme: 'bootstrap',
            minimumResultsForSearch: Infinity
          });
        }
      });
    } else {
      $('select:not(.no-search)').each(function () {
        if ($(this).closest(".modal").length) {
          var modalID = "#" + $(this).closest(".modal").attr("id");
          $(this).select2({
            theme: 'bootstrap',
            dropdownParent: modalID
          });
        }
        else {
          $(this).select2({
            theme: 'bootstrap'
          });
        }
      });
      $('select.no-search').each(function () {
        if ($(this).closest(".modal").length) {
          var modalID = "#" + $(this).closest(".modal").attr("id");
          $(this).select2({
            theme: 'bootstrap',
            dropdownParent: modalID,
            minimumResultsForSearch: Infinity
          });
        }
        else {
          $(this).select2({
            theme: 'bootstrap',
            minimumResultsForSearch: Infinity
          });
        }
      });
    }
  }
  catch (error) {
    console.error("Some Error Occurred while initializing Select2", error);
  }
}

/*=====  End of Select 2 initialize  ======*/



/*=============================================
=            AOS Content animation            =
=============================================*/

function initializeAOS() {
  AOS.init({
    duration: 1200,
  })
}

/*=====  End of AOS Content animation  ======*/



function showLoader() {
  $('.loader-container').show();
}
function hideLoader() {
  $('.loader-container').hide();
}

/*
  ****************************************
  * Function that detects change in color theme
  * preference and get localstorage preference
  ****************************************
  */
function initUserThemePreference() {
  /*
  * Check if Browser Preference is present
  */
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    if (localStorage.getItem("color-mode") == null || localStorage.getItem("color-mode") == "auto") {
      // dark mode
      $("html").attr("data-bs-theme", "dark");
      $("[data-color-mode=auto]").addClass('active');
    }
  }

  /*
  * Add Event Listener for Change
  */
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (localStorage.getItem("color-mode") == null || localStorage.getItem("color-mode") == "auto") {
      const newColorScheme = event.matches ? "dark" : "light";
      if (newColorScheme == "dark") {
        $("html").attr("data-bs-theme", "dark");
        $("[data-color-mode=dark]").addClass('active');
      }
    }
  });

  /*
  * One time, check localstorage value for color-mode
  */
  if (localStorage.getItem("color-mode") == "dark") {
    // dark mode
    $("html").attr("data-bs-theme", "dark");
    $("[data-color-mode=dark]").addClass('active');
    $(".color-toggle").find("i").removeClass("fa-circle-half-stroke fa-sun").addClass("fa-moon");
  }
  else {
    if (localStorage.getItem("color-mode") == "light") {
      $("[data-color-mode=light]").addClass('active');
      $(".color-toggle").find("i").removeClass("fa-circle-half-stroke fa-moon").addClass("fa-sun");
    }
  }

  /*
  * On click, update the design of the Theme picker
  */
  $("[data-color-mode]").on("click", function () {

    // Case Light
    if ($(this).attr("data-color-mode") == "light") {
      $("html").removeAttr("data-bs-theme");
      $("[data-color-mode]").removeClass("active");
      $(this).addClass("active");
      $(".color-toggle").find("i").removeClass("fa-circle-half-stroke fa-moon").addClass("fa-sun");
      localStorage.setItem("color-mode", "light");
    }
    else {
      // Case Dark
      if ($(this).attr("data-color-mode") == "dark") {
        $("html").attr("data-bs-theme", "dark");
        $("[data-color-mode]").removeClass("active");
        $(this).addClass("active");
        $(".color-toggle").find("i").removeClass("fa-circle-half-stroke fa-sun").addClass("fa-moon");
        localStorage.setItem("color-mode", "dark");
      }
      else {
        // Case Auto
        if ($(this).attr("data-color-mode") == "auto") {
          localStorage.setItem("color-mode", "auto");
          $("[data-color-mode]").removeClass("active");
          $(this).addClass("active");
          $(".color-toggle").find("i").removeClass("fa-sun fa-moon").addClass("fa-circle-half-stroke");
          if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            $("html").attr("data-bs-theme", "dark");
          }
          else {
            $("html").removeAttr("data-bs-theme");
          }
        }
      }
    }
  });
}