function formValidation(){
	var nameInput = document.venueApproval.name;
	var phoneInput = document.venueApproval.phone;
	var emailInput = document.venueApproval.email;

		if(allLetter(nameInput)){
			if(allnumeric(phoneInput)){
				if(emailValidation(emailInput)){}
			}
		}return false;


function allLetter(nameInput){
	var letters = /^[A-Za-z]+$/;
	if(nameInput.value.match(letters)){
		return true;
	}else{
		alert('Name must have alphabet characters only');
		nameInput.focus();
		return false;
	}
}

function allnumeric(phoneInput){
	var numbers = /^[0-9]+$/;
	if(phoneInput.value.match(numbers)){
		return true;
	}else{
		alert('Mobile no. must have numeric characters only!');
		mobileInput.focus();
		return false;

	}
}

function emailValidation(emailInput){
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.value.match(mailformat)){
		return true;
	}else{
		alert('Email is invalid! Please try again!');
		email.focus();
		return false;
	}
}

}
