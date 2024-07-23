let currentStep = 1;

function nextStep(step) {
  if (validateForm(step)) {
    document.getElementById(`form-step-${step}`).classList.remove("active");
    currentStep++;
    document.getElementById(`form-step-${currentStep}`).classList.add("active");
    updateProgressBar(currentStep);
    document
      .querySelector(".teacher-info__left__form")
      .classList.add(`form-${step + 1}`);
    document
      .querySelector(".teacher-info__left__form")
      .classList.remove(`form-${step}`);
  }
}

function previousStep(step) {
  document.getElementById(`form-step-${step}`).classList.remove("active");
  currentStep--;
  document.getElementById(`form-step-${currentStep}`).classList.add("active");
  document
    .querySelector(".teacher-info__left__form")
    .classList.remove(`form-${step}`);
  document
    .querySelector(".teacher-info__left__form")
    .classList.add(`form-${step - 1}`);

  updateProgressBar(currentStep);
}

function validateForm(step) {
  let valid = true;
  let formStep = document.getElementById(`form-step-${step}`);
  let inputs = formStep.querySelectorAll("input, select");
  let checkboxes = formStep.querySelectorAll('input[type="checkbox"]');
  let anyCheckboxChecked = false;
  inputs.forEach((input) => {
    const errorMessage = input.nextElementSibling;
    if (!input.checkValidity()) {
      valid = false;
      input.classList.add("is-invalid");
      if (errorMessage && errorMessage.classList.contains("error-message")) {
        errorMessage.style.display = "block";
      }
    } else {
      input.classList.remove("is-invalid");
      if (errorMessage && errorMessage.classList.contains("error-message")) {
        errorMessage.style.display = "none";
      }
    }
  });

  if (step == 2 || step == 3) {
    let allCheckboxes = formStep.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        anyCheckboxChecked = true;
        formStep.classList.remove("is-invalid");
      }
    });
    if (!anyCheckboxChecked) {
      valid = false;
      // Display error message or mark the step as invalid
      // Example: you can add a class to show error for checkboxes
      // Adjust this as per your UI/UX design
      formStep.classList.add("is-invalid");
    }
    return valid;
  }

  return valid;
}

function updateProgressBar(step) {
  const progressBar = document.getElementById("progress-bar");
  const stepCount = 4; // total number of steps
  const percentage = (step / stepCount) * 100;
  progressBar.style.width = `${percentage}%`;
}
