//steup and initial code struture
document.addEventListener("DOMContentLoaded", function (){

});

document.getElementById("registration-form")

const form = "registration-form"

document.addEventListener("DOMContentLoaded", function(){
    const feedbackDiv = document.ElementById("form-feedback");
 })

 //form submission and event prevention
 document.addEventListener("DOMContentLoaded", function() {
    const feedbackDiv = document.getElementById("submissions");

form.addEventListener("submit", functiion(event){
    event.preventDefault();

    const username = document.getElementById("username").Value.trim();
    const username = document.getElementById("email").Value.trim();
    const username = document.getElementById("password").Value.trim();

    if (!username || !email || !password) {
        feedbackDiv.textContent = "All fields are required!";
        return;
    }


    feedbackDiv.textContent = "Form submitted successfully!"
})
 })

 //validation logic
 document.addEventListener("DOMContentLoaded", function () {
    const feedbackDiv = document.getElementById("form-feedback");
    const form = document.getElementById("your-form-id"); 

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        
        let isValid = true;
        let messages = [];

       
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        
        if (!username) {
            messages.push("Username is required.");
            isValid = false;
        }
        if (!email) {
            messages.push("Email is required.");
            isValid = false;
        }
        if (!password) {
            messages.push("Password is required.");
            isValid = false;
        }

        
        if (!isValid) {
            feedbackDiv.textContent = messages.join(" ");
        } else {
            feedbackDiv.textContent = "Form submitted successfully!";
        }
    });
});

//Displaying Feedback
document.addEventListener("DOMContentLoaded", function () {
    const feedbackDiv = document.getElementById("form-feedback");
    const form = document.getElementById("your-form-id"); 

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        
        let isValid = true; 
        let messages = []; 

        
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();


        if (!username) {
            messages.push("Username is required.");
            isValid = false;
        }
        if (!email) {
            messages.push("Email is required.");
            isValid = false;
        }
        if (!password) {
            messages.push("Password is required.");
            isValid = false;
        }

        
        feedbackDiv.style.display = "block";

        
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; 
        } else {
            feedbackDiv.innerHTML = messages.join("<br>"); 
            feedbackDiv.style.color = "#dc3545"; 
        }
    });
});

// username validation
username.length = < 3


