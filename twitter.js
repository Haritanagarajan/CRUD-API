

function validateapiform() {
  console.log("WORKING");
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/twitter");
  xhttp.send()
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      for (const twitt of objects) {
        if (username == twitt["username"] && (password == twitt["password"])) {
          console.log("success");
          window.location.replace("twitterhomepage.html");
        }
      }

    }
    alert("not a valid user")

  }
}

function createtwitteruser() {
  console.log("hello");
  const username1 = document.getElementById("username1").value;
  const password1 = document.getElementById("password2").value;
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/twitter");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(
    JSON.stringify({
      username1: username1,
      password1: password1
    })
  );
  console.log("success");
}

