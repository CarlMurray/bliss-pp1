window.onload = function () {
    let errorMsg;
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = (Math.random() * 100000) | 0;
        // these IDs from the previous steps
        emailjs.sendForm("service_u8p34w3", "template_ilgfd18", this).then(
          function () {
            // SHOW SUCCESS FEEDBACK MESSAGE
            const submitFeedbackSuccess = document.querySelector(
              "#contact-feedback-success"
            );
            const submitBtn = document.querySelector("#submit-input");
            const formTextInputs =
              document.querySelector(".input-container");
            const formTextarea = document.querySelector("textarea");
            submitFeedbackSuccess.classList.remove("hidden");
            submitBtn.classList.add("hidden");
            formTextInputs.classList.add("hidden");
            formTextarea.classList.add("hidden");
            document.getElementById("contact-form").classList.add("hidden");

            // IF ERROR MESSAGE ALREADY VISIBLE, HIDE ON SUCCESSFUL SUBMIT
            if (errorMsg) {
              document
                .querySelector("#search-error-message")
                .classList.add("hidden");
            }
          },
          function (error) {
            // IF UNSUCCESSFUL, SHOW ERROR MESSAGE
            if (!errorMsg) {
              const form = document.querySelector("form");
              errorMsg = document.createElement("p");
              errorMsg.setAttribute("id", "search-error-message");
              errorMsg.innerText =
                "Oops! Something went wrong. Please try again.";
              form.append(errorMsg);
            }
          }
        );
      });
  };
