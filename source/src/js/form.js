const formTriggers = document.querySelectorAll("[data-form-trigger]");

const formInnerHTML = `<div class="form__inner">
                            <div class="form__wrapper">
                                <div class="form__close">
                                    <img src="img/close.svg" class="close" id="close">
                                </div>
                                <div class="form__upper">
                                    <h2 class="form__header">Leave your contact details below</h2>
                                    <p class="form__upper-text">
                                        and we will get back with a solution for your specific manufacturing
                                        environmnent.
                                    </p>
                                </div>
                                <div class="form__main">
                                    <div class="form__row">
                                        <input type="text" class="form__input" placeholder="Name" id="userName">
                                    </div>
                                    <div class="form__row">
                                        <input type="text" class="form__input" placeholder="E-mail" id="userEmail">
                                    </div>
                                    <div class="form__row">
                                        <input type="text" class="form__input" placeholder="Company" id="company">
                                    </div>
                                    <div class="form__row">
                                        <input type="text" class="form__input" placeholder="Phone" id="phoneNumber">
                                    </div>
                                    <div class="form__row">
                                        <input type="text" class="form__input" placeholder="You can leave your message here" id="yourMessage">
                                    </div>
                                    <div class="form__submit">
                                        <div class="form__button button">
                                            SEND YOUR MESSAGE
                                            <img class="button__arrow form__button-arrow" src="img/arrow-right.svg" alt="" />
                                        </div>
                                    </div>
                                    <div class="form__footer">
                                        <img src="img/form-icon.svg" alt="" class="form__footer-icon">
                                        <a href="mailto:info@productivitystar.ai">info@productivitystar.ai</a>
                                    </div>
                                </div>
                                <div class="form__success">
                                    <div class="form__success-icon-wrap">
                                        <img src="img/formSuccess.svg" class="form__success-icon" />
                                    </div>
                                    <div class="form__success-text">
                                        <div class="form__success-header">
                                            Your message has been sent successfully. 
                                        </div>
                                        <div class="form__success-desc">
                                            We will contact you shortly.
                                        </div>
                                    </div>
                                </div>
                                <div class="form__failure">
                                    <div class="form__failure-icon-wrap">
                                        <img src="img/formFailure.svg" class="form__failure-icon" />
                                    </div>
                                    <div class="form__failure-text">
                                        <div class="form__failure-header">
                                            Sorry! Your message can not be sent :(. 
                                        </div>
                                        <div class="form__failure-desc">
                                            We have problem with hosting.
                                            Please write to us by email
                                            <span class="underlined">info@productivitystar.ai</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;

const onFormTriggerClick = () => {
    form.innerHTML = formInnerHTML;
    appointListeners();
};

const appointListeners = () => {
    form.onmousedown = onCloseClick;
    form.oninput = resetInputError;

    const submitButton = document.querySelector(".form__button");
    submitButton.onclick = onSubmitClick;
};

const onCloseClick = e => {
    const { classList } = e.target;
    if (classList.contains("close") || classList.contains("form__inner")) {
        form.innerHTML = "";
    }
};

const resetInputError = e => {
    e.target.parentElement.style.border = "";
};

const onSubmitClick = () => {
    const userName = form.querySelector("#userName").value;
    const userEmail = form.querySelector("#userEmail").value;
    const company = form.querySelector("#company").value;
    const phoneNumber = form.querySelector("#phoneNumber").value;
    const yourMessage = form.querySelector("#yourMessage").value;

    if (!userName) {
        throwInputError("userName");
    }

    const isEmailValid = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(userEmail);

    if (!userEmail || !isEmailValid) {
        throwInputError("userEmail");
    }

    if (!company) {
        throwInputError("company");
    }

    if (!phoneNumber) {
        throwInputError("phoneNumber");
    }

    if (!userName || !userEmail || !isEmailValid || !company || !phoneNumber) return;

    const config = {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };

    config.body = JSON.stringify({
        userName,
        userEmail,
        company,
        phoneNumber,
        yourMessage
    });

    fetch("/doMail", config).then(resp => {
        if (resp.ok) {
            showSuccess();
        } else showFailure();
    });
};

const throwInputError = inputName => {
    const element = form.querySelector(`#${inputName}`).parentElement;
    element.style.borderColor = "#f18a85";
};

const showSuccess = () => {
    form.classList.add("success");
};

const showFailure = () => {
    form.classList.add("failure");
};

formTriggers.forEach(trigger => (trigger.onclick = () => onFormTriggerClick()));
window.addEventListener("load", function() {
    if (location.pathname === "/trial") {
        onFormTriggerClick();
    }
});
