
// $(document).load(() => {
     var navbar = $(".navbar");
     var hamburger = $(".hamburger");
     var navGroup = $(".nav-group");
     var navInner = $(".navbar-inner")
     var navLinks = $(".nav-link");
     var rightIcon = $(".fa-caret-right");
     var leftIcon = $(".fa-caret-left");
     var customizeOverlay = $(".customize-overlay");
     var customizePg = $("#customize-page");
     var stickyNavgroup = $(".sticky-nav-group-wrapper");
     var stickyMenuBtn = $(".sticky-menu");

     var heroTxt = $(".hero-txt");
     var heroTxtZindex = heroTxt.css("z-index");
     var heroTxtWidth = heroTxt[0].scrollWidth;
     var heroTxtHeight = heroTxt[0].scrollHeight;

     stickyMenuBtn.css("height", stickyNavgroup[0].scrollHeight);

     var navbarWidth = navbar[0].scrollWidth;
     var navbarHeight = navbar[0].scrollHeight;

     hamburger.on("click", function () {

          if (!(hamburger.hasClass("change")))
               hamburger.addClass("change");
          else
               hamburger.removeClass("change");

          navGroup.slideToggle("slow");
     })

     navLinks.on("click", function () {

          if (hamburger.hasClass("change")) {
               hamburger.removeClass("change");
          }

          if ($(window).width() < 1000)
               navGroup.slideToggle("slow");
     });

     $(".sticky-menu").on("click", () => {
          $(".sticky-nav-group-wrapper").toggle("slide");

          if (rightIcon.hasClass("hidden")) {
               rightIcon.removeClass("hidden");
               leftIcon.addClass("hidden");
          }
          else {
               rightIcon.addClass("hidden");
               leftIcon.removeClass("hidden");
          }
     });

     $(".sticky-nav-link").on("click", () => {
          $(".sticky-nav-group-wrapper").toggle("slide");

          if (rightIcon.hasClass("hidden")) {
               rightIcon.removeClass("hidden");
               leftIcon.addClass("hidden");
          }
          else {
               rightIcon.addClass("hidden");
               leftIcon.removeClass("hidden");
          }
     })

     $(".close-overlay").click(() => {

          if (!(customizeOverlay.hasClass("hidden"))) {
               customizeOverlay.addClass("hidden");
          }
     });

     customizePg.click(() => {
          if (customizeOverlay.hasClass("hidden")) {
               customizeOverlay.removeClass("hidden")
          }
     });

     jQuery("<div/>", {
          class: "heroTxt-overlay"
     }).appendTo(customizeOverlay);

     jQuery("<div/>", {
          class: "navbar-overlay"
     }).appendTo(customizeOverlay);

     $(".heroTxt-overlay").css({ "width": (heroTxtWidth + 30), "height": (heroTxtHeight + 30) });

     $(".navbar-overlay").css({ "width": "100%", "height": (navbarHeight) });

     jQuery("<i/>", {
          id: "addDescription",
          class: "fas fa-plus-circle"
     }).appendTo(($(".heroTxt-overlay")));

     jQuery("<label/>", {
          for: "addDescription",
          text: "Add a Description"
     }).appendTo(($("#addDescription")));


     jQuery("<i/>", {
          id: "addTheme",
          class: "fas fa-plus-circle"
     }).appendTo($(".navbar-overlay"));

     jQuery("<label/>", {
          for: "addTheme",
          text: "Font/Color Theme"
     }).appendTo(($("#addTheme")));


     jQuery("<i/>", {
          id: "addHeroImg",
          class: "fas fa-plus-circle"
     }).appendTo(($(".customize-overlay")));

     jQuery("<label/>", {
          for: "addHeroImg",
          text: "Add a Background Image"
     }).appendTo(($("#addHeroImg")));

     // $(".addDescription").click({

     // });
// });


