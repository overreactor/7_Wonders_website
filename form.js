function showMessage(input, message, type) {
    const msg = input.parentNode.querySelector("small");
    msg.innerText = message;
    input.className = type ? "success" : "error";
    return type;
}

function showError(input, message) {
    return showMessage(input, message, false);
}

function showSuccess(input) {
    return showMessage(input, "", true);
}

function hasValue(input, message) {
    if (input.value.trim() === "") {
        return showError(input, message);
    }
    return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
    if (!hasValue(input, requiredMsg)) {
        return false;
    }
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const email = input.value.trim();
    if (!emailRegex.test(email)) {
        return showError(input, invalidMsg);
    }
    return true;
}

const form = document.querySelector("#signup");
const nameRequired = "Please enter your name";
const emailRequired = "Please enter your email";
const emailInvalid = "Please enter a correct email address format";

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let nameValid = hasValue(form.elements["name"], nameRequired);
    let emailValid = validateEmail(form.elements["email"], emailRequired, emailInvalid);
    if (nameValid && emailValid) {
        alert("Thank you for subscribing!");
    }
});