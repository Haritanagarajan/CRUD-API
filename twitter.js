
//user create for get

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
          loggeduserEdit(twitt['id']);
          return false;
        }
      }
      window.alert("Not a valid Twitter User");
    }

  }

}

//logged user with edit

function loggeduserEdit(id) {
  console.log("login user edit");
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const xhttp = new XMLHttpRequest();
  xhttp.open("PUT", `http://localhost:3000/userlogin/${id}`);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(
    JSON.stringify({
      username: username,
      password: password,
      login: 1,

    })
  );
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      Swal.fire(objects["message"]);
      window.location.replace("twitterhomepage.html");
    }
  };
}

//logout user with get and edit

function logoutuserEdit() {
  const xhttpp = new XMLHttpRequest();
  xhttpp.open("GET", "http://localhost:3000/userlogin");
  xhttpp.send();
  xhttpp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      for (const twitt of objects) {
        if (twitt['login'] == 1) {
          const xhttpObj = new XMLHttpRequest();
          xhttpObj.open("PUT", `http://localhost:3000/userlogin/${twitt['id']}`);
          xhttpObj.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
          xhttpObj.send(
            JSON.stringify({
              username: twitt['username'],
              password: twitt['password'],
              login: 0,

            })
          );
          xhttpObj.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              const objects = JSON.parse(this.responseText);
              Swal.fire(objects["message"]);
              window.location.replace("twitterlogin.html");
            }
          };
          break;
        }
      }
    }
  }
}



//create user edit

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

  window.location.replace("twitterlogin.html");

}

// Use the following command to install JSON Server
// npm install -g json-server

// Use this command to get access to JSON data
// json-server --watch <jsonfilename.json>



//admin login with get

function adminreadvalue(event) {
  event.preventDefault();
  console.log("adminlogin");
  const adminusername = document.getElementById("adminusername").value;
  const adminpassword = document.getElementById("adminpassword").value;
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/adminlogin");
  xhttp.send();
  console.log(adminpassword, adminusername)
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      for (const twitt of objects) {
        if (adminusername == twitt["aname"] && (adminpassword == twitt["apassword"])) {
          window.location.replace("index.html");
          return false;
        }
      }
      window.alert("Not a valid Twitter Admin");
    }
  }

}

//tweet the message




function showtweetmsgbox(event) {
  event.preventDefault();

  Swal.fire({
    title: "Create user",
    customClass: {
      popup: 'red-popup',
    },
    html:
      '<form id="myform"  class="is-validated">' +
      '<div class="swal2-row">' +
      '<input id="id" type="hidden" class="swal2-input">' +
      "</div>" +


      '<div class="swal2-row">' +
      '<label for="username">UserName</label>' +
      '<input id="username" name="username" class="swal2-input" placeholder="UserName" pattern="[a-zA-Z]+" required>' +
      '</div>' +

      '<div class="swal2-row">' +
      '<label for="message">Message</label>' +
      '<input id="message" class="swal2-input" type="textarea" placeholder="message" required>' +
      "</div>",

    showCancelButton: true,

    preConfirm: async () => {


      twittermessage(event)

    },
  });
}

function twittermessage(event) {
  event.preventDefault();
  console.log("message");
  const message = document.getElementById("message").value;
  const username = document.getElementById("username").value;
console.log(message);
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/Twittermessage");
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      for (const twitt of objects) {
        if ((message == twitt["twittmsg"]) && (username==twitt["username"])) {
          return false;
        }
      }
      window.alert("Not a valid Twitter Admin");
    }
  }

}

