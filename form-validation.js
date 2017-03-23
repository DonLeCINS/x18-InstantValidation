function register()
{
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  window.alert( userEntered + " " + passEntered);
}
  function validateUser()
  {
    var userEntered = document.getElementById("user").value;
    if (userEntered.length < 6)
    {
      //Show message that there is an error with the username...
      document.getElementById("usernameError").innerHTML="User name must have 6 characters";
      document.getElementById("usernameError").classList.remove("hidden-message");
      document.getElementById("usernameError").classList.add("shown-message");
      //Turn the username items red
      document.getElementById("usernameGroup").classList.add("has-error");
      document.getElementById("usernameGroup").classList.remove("has-success");
    }
    else if (userEntered.length >= 6)
    {
        document.getElementById("usernameError").innerHTML="Good username.";
        document.getElementById("usernameError").classList.add("hidden-message");
        document.getElementById("usernameError").classList.remove("shown-message");
        document.getElementById("usernameGroup").classList.remove("has-error");
        document.getElementById("usernameGroup").classList.add("has-success");

    }
    if(userEntered.indexOf(" ") != -1)
    {
      document.getElementById("usernameError").innerHTML="User name can't contain spaces";
      document.getElementById("usernameError").classList.remove("hidden-message");
      document.getElementById("usernameError").classList.add("shown-message");
      document.getElementById("usernameGroup").classList.add("has-error");
      document.getElementById("usernameGroup").classList.remove("has-success");
    }

  }
  function validatePass()
  {
    var userEntered = document.getElementById("user").value;
    var passEntered = document.getElementById("pass").value;
    if (passEntered == "password" || passEntered == "Password")
    {
      //Show message that there is an error with the password...
      document.getElementById("passwordError").innerHTML="Password can't be password";
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
      //Turn the password items red
      document.getElementById("passwordGroup").classList.add("has-error");
      document.getElementById("passwordGroup").classList.remove("has-success");
    }
    else if (passEntered == userEntered)
    {
        document.getElementById("passwordError").innerHTML="Password can't be same as username";
        document.getElementById("passwordError").classList.remove("hidden-message");
        document.getElementById("passwordError").classList.add("shown-message");
        //Turn the password items red
        document.getElementById("passwordGroup").classList.add("has-error");
        document.getElementById("passwordGroup").classList.remove("has-success");
    }
    else
    {
      document.getElementById("passwordError").innerHTML="Password is set";
      document.getElementById("passwordError").classList.add("hidden-message");
      document.getElementById("passwordError").classList.remove("shown-message");
      document.getElementById("passwordGroup").classList.remove("has-error");
      document.getElementById("passwordGroup").classList.add("has-success");
  }
}
