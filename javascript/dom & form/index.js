// Reference

function calculateAge() {
  const ageInput = document.getElementById("age");

  const userAge = Number(ageInput.value);

  if (userAge < 18) {
    alert("You are not eligible");
  } else {
    alert("Perfect to go");
  }
}

function signIn() {
  const emailRef = document.getElementById("email");
  const passwordRef = document.getElementById("password");

  const email = emailRef.value;
  const password = passwordRef.value;

  console.log(email);
  console.log(password);

  if (email == "z@gmail.com" && password == "12345") {
    const messageRef = document.getElementById("message");
    messageRef.innerHTML = "You are signed in";
  } else {
    const messageRef = document.getElementById("message");
    messageRef.innerHTML = "Incorrect email and password";
  }
}
