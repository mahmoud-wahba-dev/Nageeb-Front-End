const inputs = document.querySelectorAll(".otp-field > input");
const button = document.querySelector("#otpSubmit");
const btn_resend = document.querySelector(".btn_resend");
let otp_stack = [];
let otp_value = document.getElementById("otp-value");

window.addEventListener("load", () => inputs[0].focus());
button.setAttribute("disabled", "disabled");
reset_resend();
update_resend(59);

function reset_resend() {
    btn_resend.setAttribute("disabled", "disabled");
    btn_resend.style.color = "#0005";
    btn_resend.textContent = "Resend OTP in 60 seconds";
}

function update_resend(time) {
    let timeLeft = time;
    const countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            btn_resend.style.display = "block";
            btn_resend.textContent = "Resend OTP";
            btn_resend.removeAttribute("disabled");
            btn_resend.style.color = "#1E6EA4";
            btn_resend.style.cursor = "pointer";
        } else {
            btn_resend.textContent = "Resend OTP in " + timeLeft + " seconds";
            timeLeft--;
            btn_resend.style.color = "#0005";
            btn_resend.style.cursor = "pointer";
        }
    }, 1000);
}

btn_resend.addEventListener("click", () => {
    setTimeout(() => {
        reset_resend();
        update_resend(59);
    }, 2000);
});

inputs[0].addEventListener("paste", function(event) {
    event.preventDefault();
    const pastedValue = (event.clipboardData || window.clipboardData).getData("text");
    const otpLength = inputs.length;

    for (let i = 0; i < otpLength; i++) {
        if (i < pastedValue.length) {
            inputs[i].value = pastedValue[i];
            inputs[i].removeAttribute("disabled");
            inputs[i].classList.add("finished");
            otp_stack[i] = pastedValue[i]; // Store in otp_stack
            if (i + 1 < otpLength) inputs[i + 1].focus();
        } else {
            inputs[i].value = "";
            inputs[i].classList.remove("finished");
            otp_stack[i] = ""; // Clear corresponding entry in otp_stack
        }
    }

    checkAllInputs();
});

inputs.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {
        const currentInput = input;
        const nextInput = input.nextElementSibling;
        const prevInput = input.previousElementSibling;

        if (currentInput.value.length > 1) {
            currentInput.value = currentInput.value.charAt(0);
        }

        if (currentInput.value !== "") {
            currentInput.classList.add("finished");
            otp_stack[index1] = currentInput.value; // Store in otp_stack

            if (nextInput) {
                nextInput.removeAttribute("disabled");
                nextInput.focus();
            }
        } else {
            currentInput.classList.remove("finished");
            otp_stack[index1] = ""; // Clear corresponding entry in otp_stack

            // Ensure the focus stays on the current input if a value is removed
            currentInput.focus();

            if (e.key === "Backspace" && prevInput) {
                prevInput.focus();
                prevInput.removeAttribute("disabled");
                prevInput.classList.remove("finished");
                otp_stack[index1 - 1] = ""; // Clear corresponding entry in otp_stack
            }
        }

        checkAllInputs();
    });
});

button.addEventListener('click', () => {
    setTimeout(() => {
        reset_resend();
        update_resend(59);
    }, 60000);
});

btn_resend.addEventListener("click", function() {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
        inputs[i].classList.remove("finished");
        if (i > 0) {
            inputs[i].setAttribute("disabled", true);
        }
    }
    inputs[0].removeAttribute("disabled");
    inputs[0].focus();
    checkAllInputs();
    otp_stack = []; // Clear otp_stack array
    button.setAttribute("disabled", "disabled");
});

function checkAllInputs() {
    const allFilled = Array.from(inputs).every(input => input.value !== "");
    if (allFilled) {
        button.removeAttribute("disabled");
    } else {
        button.setAttribute("disabled", "disabled");
    }
    let otpConcatenated = otp_stack.join(""); // Join all OTP digits into a single string
    otp_value.value = otpConcatenated; // Assign concatenated OTP to otp_value element
    console.log(otp_value);
}
