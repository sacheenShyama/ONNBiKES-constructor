 
document.getElementById("welcome").addEventListener("click", dilip);
      function dilip() {
          var blur = document.getElementById("blur");
          blur.classList.toggle('active')
          var popup420 = document.getElementById("popup420");
          popup420.classList.toggle('active')
        }



let data = JSON.parse(localStorage.getItem("userdata"));
    console.log(data);

function dilipl() {
    let pass = document.getElementById("pass").value;
    let em=document.getElementById("em").value;
    if (data[0] == '') {
            alert("ddfg")
        }
    else {
        if (data[0] != em) {
            alert("Please enter a valid email address")
        }
        else if (data[1] != pass) {
            alert("Please enter a valid password")

        }
        else if (data[0] == em && data[1] == pass) {
            alert("login successful")
            window.location.href = "home.html";
        }
    }
    }
    function dilips() {
            let fname=document.getElementById("fname").value;
            let lname=document.getElementById("lname").value;
            let password= document.getElementById("password").value;
            let email= document.getElementById("email").value;
            let mobile= document.getElementById("mobile").value;
        if (fname == '') {
            alert("please enter Fname")
        }
       else if (lname == '') {
            alert("please enter lname")
        }
        else if (email == '') {
            alert("please enter email")
        }
       else if (password == '') {
            alert("please enter password")
        }
       else if (mobile == '') {
            alert("please enter mobile")
        }
        let arr = [];
        arr.push(email,password);
        console.log(arr)
        localStorage.setItem("userdata", JSON.stringify(arr))
    }
    function log() {
    
        document.getElementById("input").style.display="none";

        document.getElementById("inputs").style.display="inline-block";
        document.getElementById("lo").innerHTML="Login";
        document.getElementById("lo").addEventListener('click',dilipl);
     
    }
    function sig() {
        document.getElementById("inputs").style.display="none";
        
        document.getElementById("input").style.display="inline-block";
      
        document.getElementById("lo").innerHTML="Signup";
        document.getElementById("lo").addEventListener('click',dilips);

        
    }