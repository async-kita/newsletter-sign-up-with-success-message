class Subscribe {
  selectors = {
    root: "[data-js-content]",
    card: "[data-js-card]",
    form: "[data-js-card-form]",
    message: "[data-js-message]",
    formEmail: "[data-js-card-input]",
    emailMessage: "[data-js-message-email]",
    buttonMessage: "[data-js-message-button]",
  };

  stateClasses = {
    isError: "is-error",
    isSubmit: "is-submit",
  };

  regex = {
    email: /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/,
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.cardElement = this.rootElement.querySelector(this.selectors.card);
    this.messageElement = this.rootElement.querySelector(
      this.selectors.message,
    );
    this.formElement = this.cardElement.querySelector(this.selectors.form);
    this.formEmailElement = this.cardElement.querySelector(
      this.selectors.formEmail,
    );
    this.emailMessageElement = this.messageElement.querySelector(
      this.selectors.emailMessage,
    );
    this.buttonMessageElement = this.messageElement.querySelector(
      this.selectors.buttonMessage,
    );
    this.init();
  }

  onClickButtonDismiss = () => {
    this.formEmailElement.value = "";
    this.rootElement.classList.remove(this.stateClasses.isSubmit);
  };

  onSubmitForm = event => {
    event.preventDefault();
    if (!this.regex.email.test(this.formEmailElement.value)) {
      return this.cardElement.classList.add(this.stateClasses.isError);
    }

    this.emailMessageElement.textContent = this.formEmailElement.value;
    this.cardElement.classList.remove(this.stateClasses.isError);
    this.rootElement.classList.add(this.stateClasses.isSubmit);
  };

  init() {
    this.formElement.addEventListener("submit", this.onSubmitForm);
    this.buttonMessageElement.addEventListener(
      "click",
      this.onClickButtonDismiss,
    );
  }
}

new Subscribe();
