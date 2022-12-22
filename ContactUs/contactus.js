function validateForm() {
    // Get form elements
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");
  
    // Validate form
    if (name.value == "") {
      alert("Name is required");
      name.focus();
      return false;
    }
    if (email.value == "") {
      alert("Email is required");
      email.focus();
      return false;
    }
    if (subject.value == "") {
      alert("Subject is required");
      subject.focus();
      return false;
    }
    if (message.value == "") {
      alert("Message is required");
      message.focus();
      return false;
    }
  
    // Form is valid, submit it
    return true;
  }
  