function validateForm() {
	var validation_result = true;
	var error_messages = document.createElement("ul");
  var name = document.forms["myForm"]["fname"].value;
  var surname = document.forms["myForm"]["lname"].value;
  var email = document.forms["myForm"]["email"].value;
  var patt = new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$");
 
 	if(name == null || name == "") {
 		var message = "Plese enter your name"
 		var text_node = document.createTextNode(message);
 		var list_item = document.createElement("li");
 		list_item.appendChild(text_node);
 		error_messages.appendChild(list_item); 
 		validation_result = false;
 	}
 	
 	if (surname == null || surname == "") {
 		var message = "Plese enter your surname"
 		var text_node = document.createTextNode(message);
 		var list_item = document.createElement("li");
 		list_item.appendChild(text_node);
 		error_messages.appendChild(list_item); 
 		validation_result = false;
 	} 	
    
  if (patt.test(email) != true ) {
    var message = "Your email address is wrong"
    var text_node = document.createTextNode(message);
    var list_item = document.createElement("li");
    list_item.appendChild(text_node);
    error_messages.appendChild(list_item); 
    validation_result = false;
  }

  if (validation_result == false) {
    var divElement = document.getElementById("error");
    divElement.innerHTML = "";
    divElement.appendChild(error_messages);
    divElement.style.display = "block";
  }	

  return validation_result;
}

function validateName() {
  var name_span = document.getElementsByClassName("fname")[0];
  var name = document.forms["myForm"]["fname"].value;
  if(name == null || name == "") {
    var message = "* Please enter your name (at least 3 letters)"
    name_span.innerHTML = message;
  }

}

function validateSurname() {
	var surname_span = document.getElementsByClassName("surname")[0];
	var surname = document.forms["myForm"]["lname"].value;
	if (surname == null || surname == "") {
 		var message = "* Please enter your surname (at least 5 letters)"
 		surname_span.innerHTML = message;
 	}

}

function validateEmail() {
  var surname_span = document.getElementsByClassName("email")[0];
  var email = document.forms["myForm"]["email"].value;
  var patt = new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$");
  if (patt.test(email) != true ) {
 		var message = "* Wrong email address"
 		surname_span.innerHTML = message;
 	}	

}