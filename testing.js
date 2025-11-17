function validationForm(){
    //Clear previous error message
    document.querySelectorAll('.error').forEach(error => error.textContent='');
    let isVaild = true

    //Personal Indormation validation
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const gender = document.getElementById('gender').value.trim();
    const race= document.getElementById('race').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const pod = document.getElementById('pob').value.trim();

    //Account details validation
    const email = document.getElementById('email').value.trim();
    const cinfirmEmail = document.getElementById('ConfirmEmail').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    //Validation functions
    //function isVaildEmail(email){
        //return email !=== ''||/^[^\5@]+@[^\5@]+\.[^\5@]+$/.test(email);
    //}

    //Update this
    function validateEmailInput(){
        const emailInput = document.getElementById('emailInput').value;
        const feedbackElement = document.getElementById('emailFeedback');
        const emailRegex = /^[^\s@] + @[^\s@] +\.[^\s@]+$/;

        if (emailRegex.test(emailInput)){
            feedbackElement.textContent =''; //Email is valid
        }else {
            feedbackElement.textContent =" Please enter a valid email address.";
        }
    }

    function isValidPassword(password){
        return password === ''||(
            password.length >= 8 &&
            /[A-Z]/.test(password) &&
            /[0-9]/.test(password) &&
            /[^A-Za z0-9]/.test(password)
        );
    }

    function isValidDare(dateString){
        if(dar=teString ==='') return true;
        const date = new Date(dateString);
        return date instanceof Date && isNaN(date) && date < new Date();
    }
}
if (firstName === ""){
    document.getElementById('fistNameError').textContent = "Please enter your name.";
return false;
}

if (lastName === ''){
    document.getElementById('lastNameError').textContent = "Please enter your lastname.";
    return false; 
}
if (gender === ''){
   document.getElementById('genderError').textContent = "Please select your gender.";
    return false;  
}
 
if (race === ''){
  document.getElementById('raceError').textContent = "Please select your race.";
    return false;    
}

if (dob && !isValidDate(dob)){
   document.getElementById('dobError').textContent = "Vaild date of birth is required YYYY-MM-DD";
    isVaild = false;   
}

if (pob ===''){
    document.getElementById('pobError').textContent = "Please enter your place of birth.";
    return false;    
}

if (email && !isValidPassword(password)){
   document.getElementById('passwordError').textContent = 'Passwoed must be at least 8 characters long including';
   return false;
}

if(password && confirmPassweord && password !== confirmPassword){
    document.getElementById('confirmPasswordError').textContent = 'Password must match';
    isVaild = false; 
}

//Display submission results
const output = document.getElementById('output');

if(isValid){
    document.getElementById('output').innerHTML ='<br>User Information: <br>First name: $(fistname)<br>Last name: $(lastName)<br>Gender: $(gender)<br>Race: ${race}<br>Date of birth: $(dob}<br>Place of birth: ${pob}<br>Email: $(email)<br>Password: $(password.length).'
    return false;
}else{
    output.style.color = 'red';
    output.textContent = 'Please fix the errors inthr form';
    return false;
}

//Clear form
document.getElementById('registerForm').addEventListener('reset'),function(){
document.querySelectorAll('.error').forEach(error => error.textContent='');
document.getElementById('output').textContent ='';
}
{}