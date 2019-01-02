var button = document.querySelector(".contacts-button-feedback");
var popup = document.querySelector(".modal-email");
var close = document.querySelector(".modal-close");
var user_email = popup.querySelector("[name=user-email]");
var input_name = popup.querySelector("[name=user-name]");
var email_text = popup.querySelector("[name=email-text]");
var form = popup.querySelector("form");

button.addEventListener("click", function(evt) {
    evt.preventDefault();
//    console.log("Click bbbbbb");
    popup.classList.add("modal-show");
    input_name.focus();
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        
    if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        }    
    }
});

close.addEventListener("click", function(evt) {
   evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
   if (!input_name.value || !user_email.value || !email_text.value) {
       evt.preventDefault();
       popup.classList.add("modal-error");
   } 
});
