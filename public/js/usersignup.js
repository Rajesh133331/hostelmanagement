function save(event) {
  event.preventDefault();
  let pass1 = document.getElementById("signup-password").value;
  let pass2 = document.getElementById("signup-repassword").value;
  let mobile = document.getElementById("signup-mobile").value;

  //saving  data into object
  let obj = {
    mobilenumber: mobile,
    password: pass1,
  };

  document.getElementById("signup-password").addEventListener("focus", () => {
    document.getElementById("passwordwrong").innerHTML = "";
  });

  document.getElementById("signup-repassword").addEventListener("focus", () => {
    document.getElementById("passwordwrong").innerHTML = "";
  });

  //password same checking code here in signup
  if (pass1 !== pass2) {
    document.getElementById("passwordwrong").innerHTML =
      "* Both password should be same";
    return;
  } else {
    axios.post("/api/usersignup", obj).then((result) => {
      console.log(result);
      if (result.data.data == "noaccess") {
        alert(
          "Given mobile number has no access,kindly signup with given number",
        );
      } else if (result.data.data == "exist") {
        alert("user already have account with us please login");
        window.location.href = "/userlogin";
      } else if (result.data.data == "success") {
        alert("Signup successfull");
        window.location.href = "/userlogin";
      } else {
        alert("Something went wrong please try again");
      }
    });
  }
}
