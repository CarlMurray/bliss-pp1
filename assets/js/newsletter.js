let newsletterForm = document.querySelector(".newsletter-form");

newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();
    newsletterForm.innerHTML = "<h3 style='margin-top:0px;'>Thank you for subscribing!</h3>";
});