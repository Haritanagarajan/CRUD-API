

function validateapiform() {
  console.log("userlogin");
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/userlogin");
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      for (const twitt of objects) {
        if (username == twitt["username"] && (password == twitt["password"])) {
          console.log("success");
          window.location.replace("twitterhomepage.html");
          return false;
        }
      }
      window.alert("Not a valid Twitter User");
    }
  }

}



function createtwitteruser(event) {
  event.preventDefault();
  console.log("usercreate");
  const username1 = document.getElementById("username1").value;
  const password1 = document.getElementById("password1").value;
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/userlogin");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(
    JSON.stringify({
      username: username1,
      password: password1
    })
  );
  console.log("success");
  window.location.replace("twitterhomepage.html");
}

// Use the following command to install JSON Server
// npm install -g json-server

// Use this command to get access to JSON data
// json-server --watch <jsonfilename.json>


function adminreadvalue(event){
  event.preventDefault();
  console.log("adminlogin");
  const adminusername= document.getElementById("adminusername").value;
  const adminpassword = document.getElementById("adminpassword").value;
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/adminlogin");
  xhttp.send();
  console.log(adminpassword,adminusername)
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      for (const twitt of objects) {
        if (adminusername== twitt["aname"] && (adminpassword == twitt["apassword"])) {
          window.location.replace("index.html");
          return false;
        }
      }
     window.alert("Not a valid Twitter Admin");
    }
  }

}

