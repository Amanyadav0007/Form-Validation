function validateForm() {
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value;
    const password = document.getElementById("password").value;
    const rePassword = document.getElementById("re-password").value;
    const age = Number(document.getElementById("age").value);
    const email = document.getElementById("email").value;
    const agree = document.getElementById("agree").checked;
    

    const nameError = document.getElementById("name-error");
    const addressError = document.getElementById("address-error");
    const passwordError = document.getElementById("password-error");
    const rePasswordEerror = document.getElementById("re-password-error");
    const ageError = document.getElementById("age-error");
    const emailError = document.getElementById("email-error");
    const agreeError = document.getElementById("agree-error");


    nameError.textContent = "";
    addressError.textContent = "";
    passwordError.textContent = "";
    rePasswordEerror.textContent = "";
    ageError.textContent = "";
    emailError.textContent = "";
    agreeError.textContent = "";


    let isValid = true;

    if (name === "") {
        nameError.textContent = "Name is required!";
        isValid = false;
    } else if (name.length < 2 || name.length > 15) {
        nameError.textContent = "Out of length name!";
        isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
        nameError.textContent = "Name must only contain alphabets and spaces!";
        isValid = false;
    }



    if (address === "") {
        addressError.textContent = "Please enter your address!";
        isValid = false;
    }

    if (password === "" || password.length > 6) {
        passwordError.textContent = "Please enter password less than 6 number!"
        isValid = false;
    }

    if (rePassword === "" || rePassword != password) {
        rePasswordEerror.textContent = "Your password not match!";
        isValid = false;
    }

    if (age === "" || isNaN(age) || age < 1 || age > 70) {
        ageError.textContent = "Please enter a valid age!";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent = "Please enter a valid email address!";
        isValid = false;
    }

    if (!agree) {
        agreeError.textContent = "Please agree to the above information.";
        isValid = false;
    }

    if (isValid) {
        alert("tera data sahi hai bsdk");
    }
    
    return isValid;
}