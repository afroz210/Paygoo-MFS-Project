//step 1 - set event handler
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    //step 2- prevent default behavior (prevent loading browser)
    event.preventDefault();

    //step 3 - get the mobile number and the pin number
    const mobileNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    console.log(mobileNumber, pinNumber);
     
    //step-4 validate phone number and pin
    //this is temporary. you should do like this
    if (mobileNumber === "5" && pinNumber === "1234") {
      console.log("you are logged in");
      window.location.href = '/home.html'
      //step-5 allow user to use the website
    } else {
        alert('wrong phone number or pin')
    }
  });
