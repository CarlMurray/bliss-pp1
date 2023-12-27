$(document).ready(function () {
  // Fade in landing graphic on page load
  $(".landing-graphic").fadeIn(1000);

  bounceGraphic();

  // Slide in landing text on page load
  function slideContent() {
    $(".landing-text").slideDown(1000, function() {
    });
  }

  slideContent();

  // Animate/Fade in card elements on scroll
  $(window).scroll(function () {
    $(".fade-in").each(function () {
      let bottomOfElement = $(this).offset().top + $(this).outerHeight();
      let bottomOfWindow = $(window).scrollTop() + $(window).height();
      if (bottomOfWindow > bottomOfElement) {
        $(this).animate({ opacity: "1" }, 500);
      }
    });
  });

  // change color of nav links on hover
  $(".nav-link a").hover(
    function () {
      $(this).css("color", "#ff5f33");
    },
    function () {
      $(this).css("color", "#7a5e40");
    }
  );
});

// Landing graphic animation
let landingGraphic = document.querySelector(".landing-graphic");
landingGraphic.style.transition = "opacity 0.5s";
landingGraphic.style.opacity = "1";

// Function to perform the hover animation
function bounceGraphic() {
  landingGraphic.style.transition = "transform 2s";
  landingGraphic.style.transform = "translateY(-20px)";

  // Wait for the first animation to complete and then start the second one
  setTimeout(function () {
    landingGraphic.style.transform = "translateY(0)";
    // Call the bounceGraphic function again after the second animation completes
    setTimeout(bounceGraphic, 1000);
  }, 1000);
}
