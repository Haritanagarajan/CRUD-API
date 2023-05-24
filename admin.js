function adminreadvalue() {
    console.log("WORKING");
    const ausername = document.getElementById("adminusername").value;
    const apassword = document.getElementById("adminpassword").value;
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", " http://localhost:3000/adminlogin");
    xhttp.send();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const objects = JSON.parse(this.responseText);
        for (const twitt of objects) {
          if (ausername == twitt["adminusername"] && (apassword == twitt["adminpassword"])) {
            console.log("success");
            window.location.replace("twitterhomepage.html");
            return false;
          }
        }
        window.alert("Not a valid Twitter User");
      }
    }
  
  }
  