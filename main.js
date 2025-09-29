$(document).ready(function () {
  // Input Active

  $(".form-group input.form-control").focusin(function () {
    $(this).parent().addClass("active-input");
  });

  $(".form-group input.form-control").focusout(function () {
    if ($(this).val()) {
      $(this).parent().addClass("active-input");
    } else {
      $(this).parent().removeClass("active-input");
    }
  });

  $(".form-group input.form-control").each(function () {
    if ($(this).val()) {
      $(this).parent().addClass("active-input");
    }
  });

  //----------------------------------------------------------------

  //----------------------------------------------------------------
  // Toggle Navbar
  $(".navbar-actions .sidemenu-trigger svg").on("click", function () {
    $(".nav").toggleClass("nav-hiddin");
    $(".big-nav").toggleClass("big-nav-hiddin");
    $(".notification-container").removeClass("noti-open");
    $(".setting-container").removeClass("noti-open");
    $(".bag-container").removeClass("noti-open");
    $(".close-overlay").addClass("open-over");
  });
  //----------------------------------------------------------------

  //----------------------------------------------------------------
  // Toggle Notification
  $(".noti").on("click", function () {
    $(".notification-container").toggleClass("noti-open");
    $(".close-overlay").addClass("open-over");
    if ($(window).innerWidth() <= 575.98) {
      $(".big-nav").addClass("big-nav-hiddin");
    }
  });

  $(".close-notification").on("click", function () {
    $(".notification-container").removeClass("noti-open");
    $(".close-overlay").removeClass("open-over");
  });

  $(".close-messages").on("click", function () {
    $(".messages-container").removeClass("noti-open");
    $(".close-overlay").removeClass("open-over");
  });

  $(".close-user")
    .parent()
    .on("click", function () {
      $(".user-container").removeClass("open-user-container");
      $(".close-overlay").removeClass("open-over");
    });

  $(".user-action").on("click", function () {
    $(".user-container").toggleClass("open-user-container");
    $(".close-overlay").addClass("open-over");
  });

  $(".big-nav .close-big-nav")
    .parent()
    .on("click", function () {
      $(".big-nav").addClass("big-nav-hiddin");
      $(".nav").removeClass("nav-hiddin");
      $(".close-overlay").removeClass("open-over");
    });

  $(".teacher-toggle").on("click", function () {
    $(".big-nav").addClass("big-nav-hiddin");
    $(".user-container").toggleClass("open-user-container");
  });

  //----------------------------------------------------------------
  // Read Notification
  $(".notification-content a").on("click", function () {
    $(this).removeClass("noti-read");
  });

  //----------------------------------------------------------------

  //----------------------------------------------------------------
  // Loading Page

  $(window).on("load", function () {
    $(".loading").fadeOut(1000);
  });

  $(".toggle-dark").on("click", function () {
    $("body").toggleClass("dark");
  });

  // All Popups
  $(".close-overlay").on("click", function () {
    $(this).removeClass("open-over");
    $(".notification-container").removeClass("noti-open");

    $(".nav").removeClass("nav-hiddin");
    $(".big-nav").addClass("big-nav-hiddin");

    $(".messages-container").removeClass("noti-open");
    $(".user-container").removeClass("open-user-container");
  });

  //----------------------------------------------------------------

  // Get The First Name Of Name
  //   var getFirstName = $(".user-action-info h3").text().split(" ")[0];
  //   $(".user-action-info h3").text(getFirstName);

  // Toggle Dark & Light Icons
  if ($("body").hasClass("dark")) {
    $(".dark-mode").children(".moon").addClass("d-none");
    $(".dark-mode").children(".sun").removeClass("d-none");
  } else {
    $(".dark-mode").children(".sun").addClass("d-none");
    $(".dark-mode").children(".moon").removeClass("d-none");
  }
  $(".dark-mode").on("click", function () {
    if ($("body").hasClass("dark")) {
      $(".dark-mode").children(".moon").addClass("d-none");
      $(".dark-mode").children(".sun").removeClass("d-none");
    } else {
      $(".dark-mode").children(".sun").addClass("d-none");
      $(".dark-mode").children(".moon").removeClass("d-none");
    }
  });

  // -------------------------------------------------------------
  // Open Dropdwon In Messages Popup
  // $(".messages").on("click", function () {

  //     $(".messages-container").toggleClass("noti-open");
  //     $(".close-overlay").toggleClass("open-over");

  // });

  // $(".messages-contacts .contact-line .chat-actions .more-option-icon").on("click", function () {

  //     $(this).toggleClass("more-option-icon-active");
  //     $(this).next().toggleClass("open-dropdown");
  //     $(this).parent().parent().siblings().children(".chat-actions").children(".chat-dropdown").removeClass("open-dropdown");
  //     $(this).parent().parent().siblings().children(".chat-actions").children(".more-option-icon").removeClass("more-option-icon-active");

  // });

  // $(document).on("click", function(divClose) {

  //     if ($(divClose.target).closest(".contact-line .chat-actions").length == 0) {
  //         $(".contact-line .chat-actions .chat-dropdown").removeClass("open-dropdown");
  //         $(".more-option-icon").removeClass("more-option-icon-active");
  //     }

  // });

  // ksnkn
  $(function () {
    var $ppc = $(".progress-pie-chart"),
      percent = parseInt($ppc.data("percent")),
      deg = (360 * percent) / 100;
    if (percent > 50) {
      $ppc.addClass("gt-50");
    }
    $(".ppc-progress-fill").css("transform", "rotate(" + deg + "deg)");
    $(".ppc-percents span").html(percent + "%");
  });
});

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector(".dark-mode");

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("dark");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("dark");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});
