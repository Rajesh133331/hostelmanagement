function save(event) {
  event.preventDefault();
  let mobile = document.getElementById("signin-email").value.toLowerCase();
  let password = document.getElementById("signin-password").value;

  let obj = {
    mobilenumber: mobile,
    password: password,
  };

  axios.post("/api/userlogin", obj).then((response) => {
    console.log(response);
    if (response.data.data == "notexist") {
      alert("User not exist, check mobile number again");
    } else if (response.data.data == "wrongpassword") {
      alert("Password entered Wrongly ! check again");
    } else if (response.data.data == "success") {
      console.log(response.data.data);
      alert("login successful");
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.Name);
      window.location.href = "/userdashboard";
    } else {
      alert("Internal server error");
    }
  });
}
